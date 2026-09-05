import type { SearchEntry } from './searchIndex'
import { getAllSearchEntries, getSearchEntryById } from './searchIndex'

const STORAGE_KEY = 'arabic-study-notebook:v1:daily-review'
export const DAILY_REVIEW_COUNT = 10
const HISTORY_DAYS = 14

export type DailyReviewDay = {
  date: string
  entryIds: string[]
  completedIds: string[]
}

export type DailyReviewStorage = {
  version: 1
  today: DailyReviewDay
  history: Array<{ date: string; entryIds: string[] }>
}

export type DailyReviewSummary = {
  date: string
  total: number
  completed: number
  isComplete: boolean
}

function getLocalDateKey(date = new Date()): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function hashString(value: string): number {
  let hash = 2166136261
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

function seededShuffle<T>(items: T[], seed: number): T[] {
  const result = [...items]
  let state = seed

  for (let index = result.length - 1; index > 0; index -= 1) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0
    const swapIndex = state % (index + 1)
    ;[result[index], result[swapIndex]] = [result[swapIndex], result[index]]
  }

  return result
}

function createEmptyDay(date: string): DailyReviewDay {
  return {
    date,
    entryIds: [],
    completedIds: [],
  }
}

function readStorage(): DailyReviewStorage {
  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    const date = getLocalDateKey()
    return {
      version: 1,
      today: createEmptyDay(date),
      history: [],
    }
  }

  try {
    const parsed = JSON.parse(raw) as DailyReviewStorage
    if (parsed.version === 1 && parsed.today && Array.isArray(parsed.history)) {
      return parsed
    }
  } catch {
    // ignore malformed data
  }

  const date = getLocalDateKey()
  return {
    version: 1,
    today: createEmptyDay(date),
    history: [],
  }
}

function writeStorage(storage: DailyReviewStorage) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storage))
}

function archiveDay(storage: DailyReviewStorage, day: DailyReviewDay) {
  if (day.entryIds.length === 0) return

  const nextHistory = [
    { date: day.date, entryIds: day.entryIds },
    ...storage.history.filter((item) => item.date !== day.date),
  ].slice(0, HISTORY_DAYS)

  storage.history = nextHistory
}

function pickDailyEntryIds(date: string, allEntries: SearchEntry[], history: DailyReviewStorage['history']): string[] {
  const recentIds = new Set(
    history.flatMap((item) => item.entryIds),
  )

  const freshPool = allEntries.filter((entry) => !recentIds.has(entry.id))
  const fallbackPool = allEntries.filter((entry) => !freshPool.some((item) => item.id === entry.id))
  const seed = hashString(date)

  const ordered = [
    ...seededShuffle(freshPool, seed),
    ...seededShuffle(fallbackPool, seed + 1),
  ]

  const uniqueIds: string[] = []
  const seen = new Set<string>()

  for (const entry of ordered) {
    if (seen.has(entry.id)) continue
    seen.add(entry.id)
    uniqueIds.push(entry.id)
    if (uniqueIds.length >= DAILY_REVIEW_COUNT) break
  }

  return uniqueIds
}

function ensureTodayDeck(storage: DailyReviewStorage): DailyReviewStorage {
  const date = getLocalDateKey()

  if (storage.today.date !== date) {
    archiveDay(storage, storage.today)
    storage.today = createEmptyDay(date)
  }

  if (storage.today.entryIds.length === DAILY_REVIEW_COUNT) {
    return storage
  }

  const allEntries = getAllSearchEntries()
  storage.today.entryIds = pickDailyEntryIds(date, allEntries, storage.history)
  storage.today.completedIds = storage.today.completedIds.filter((id) =>
    storage.today.entryIds.includes(id),
  )

  return storage
}

export function getDailyReviewStorage(): DailyReviewStorage {
  const storage = readStorage()
  const next = ensureTodayDeck(storage)
  writeStorage(next)
  return next
}

export function getDailyReviewSummary(): DailyReviewSummary {
  const { today } = getDailyReviewStorage()
  const completed = today.completedIds.length

  return {
    date: today.date,
    total: today.entryIds.length,
    completed,
    isComplete: completed >= today.entryIds.length && today.entryIds.length > 0,
  }
}

export function getDailyReviewCompletedIds(): string[] {
  return getDailyReviewStorage().today.completedIds
}

export function getDailyReviewEntries(): SearchEntry[] {
  const { today } = getDailyReviewStorage()

  return today.entryIds
    .map((id) => getSearchEntryById(id))
    .filter((entry): entry is SearchEntry => Boolean(entry))
}

export function toggleDailyReviewComplete(entryId: string): DailyReviewSummary {
  const storage = getDailyReviewStorage()
  const completed = new Set(storage.today.completedIds)

  if (completed.has(entryId)) {
    completed.delete(entryId)
  } else if (storage.today.entryIds.includes(entryId)) {
    completed.add(entryId)
  }

  storage.today.completedIds = [...completed]
  writeStorage(storage)

  return getDailyReviewSummary()
}
