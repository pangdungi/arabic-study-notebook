import { adverbs } from '../data/adverbs'
import { arabicAlphabet } from '../data/arabicAlphabet'
import { arabicNumbers } from '../data/arabicNumbers'
import { caseVowelGroups } from '../data/caseVowels'
import { conjunctions } from '../data/conjunctions'
import { conversationPhrases } from '../data/conversationPhrases'
import { countryNouns } from '../data/countryNouns'
import { demonstrativePronouns } from '../data/demonstrativePronouns'
import { foodNouns } from '../data/foodNouns'
import { futureVerbs } from '../data/futureTense'
import { generalAdjectives } from '../data/generalAdjectives'
import { generalNouns } from '../data/generalNouns'
import { hospitalNouns } from '../data/hospitalNouns'
import { interrogatives } from '../data/interrogatives'
import { negationCategories } from '../data/negation'
import { objectNouns } from '../data/objectNouns'
import { peopleNouns } from '../data/peopleNouns'
import { personalPronouns } from '../data/personalPronouns'
import { placeNouns } from '../data/placeNouns'
import { prepositions } from '../data/prepositions'
import { singularPluralGroups } from '../data/singularPlural'
import { sizeQuantityAdjectives } from '../data/sizeQuantityAdjectives'
import { suffixPronouns } from '../data/suffixPronouns'
import { timeNouns } from '../data/timeNouns'
import { verbs } from '../data/verbs'
import { weekdayNouns } from '../data/weekdayNouns'

export type SearchEntry = {
  id: string
  category: string
  korean: string
  hint?: string
  arabic: string
  pronunciation: string
}

type IndexedEntry = SearchEntry & {
  searchText: string
}

function stripArabicMarks(text: string): string {
  return text.replace(/[\u0640\u064B-\u065F\u0670\u0610-\u061A\u06D6-\u06ED]/g, '')
}

function normalizeForSearch(text: string): string {
  return stripArabicMarks(text).toLowerCase().trim()
}

function buildSearchText(...parts: (string | undefined)[]): string {
  return parts
    .filter((part): part is string => Boolean(part))
    .map(normalizeForSearch)
    .join(' ')
}

function fromCards(
  category: string,
  items: Array<{
    id: string
    korean: string
    hint?: string
    english?: string
    arabic: string
    pronunciation: string
  }>,
): IndexedEntry[] {
  return items.map((item) => {
    const entry: SearchEntry = {
      id: `${category}-${item.id}`,
      category,
      korean: item.korean,
      hint: item.hint,
      arabic: item.arabic,
      pronunciation: item.pronunciation,
    }

    return {
      ...entry,
      searchText: buildSearchText(
        category,
        item.korean,
        item.hint,
        item.english,
        item.arabic,
        item.pronunciation,
      ),
    }
  })
}

function buildIndex(): IndexedEntry[] {
  const entries: IndexedEntry[] = [
    ...fromCards('인칭대명사', personalPronouns),
    ...fromCards('지시대명사', demonstrativePronouns),
    ...fromCards('부사', adverbs),
    ...fromCards('아랍어 숫자', arabicNumbers),
    ...fromCards('의문사', interrogatives),
    ...fromCards('접속사', conjunctions),
    ...fromCards('전치사', prepositions),
    ...fromCards('형용사', [...sizeQuantityAdjectives, ...generalAdjectives]),
    ...fromCards('명사 · 시간', timeNouns),
    ...fromCards('명사 · 요일', weekdayNouns),
    ...fromCards('명사 · 사람', peopleNouns),
    ...fromCards('명사 · 병원', hospitalNouns),
    ...fromCards('명사 · 음식', foodNouns),
    ...fromCards('명사 · 사물', objectNouns),
    ...fromCards('명사 · 장소', placeNouns),
    ...fromCards('명사 · 국가', countryNouns),
    ...fromCards('명사 · 일반', generalNouns),
    ...fromCards('회화', conversationPhrases),
  ]

  for (const category of negationCategories) {
    entries.push(
      ...fromCards(`부정 · ${category.title}`, category.items).map((entry) => ({
        ...entry,
        searchText: buildSearchText(
          entry.searchText,
          category.particleArabic,
          category.particlePronunciation,
        ),
      })),
    )
  }

  for (const group of caseVowelGroups) {
    entries.push(...fromCards(`격모음 · ${group.title}`, group.items))
  }

  for (const group of singularPluralGroups) {
    entries.push(...fromCards(`단복수 · ${group.title}`, group.items))
  }

  for (const verb of verbs) {
    const category = `동사 · ${verb.pastKorean}`
    entries.push({
      id: `verb-${verb.id}-summary`,
      category,
      korean: verb.pastKorean,
      hint: verb.pastEnglish,
      arabic: verb.hePast.arabic,
      pronunciation: verb.hePast.pronunciation,
      searchText: buildSearchText(
        '동사',
        verb.pastKorean,
        verb.pastEnglish,
        verb.hePast.arabic,
        verb.hePast.pronunciation,
      ),
    })

    for (const row of verb.rows) {
      entries.push(
        {
          id: `verb-${verb.id}-${row.id}-past`,
          category,
          korean: `${verb.pastKorean} · ${row.label} 과거`,
          hint: row.hint,
          arabic: row.past.arabic,
          pronunciation: row.past.pronunciation,
          searchText: buildSearchText(
            '동사',
            verb.pastKorean,
            verb.pastEnglish,
            row.label,
            row.hint,
            row.past.arabic,
            row.past.pronunciation,
          ),
        },
        {
          id: `verb-${verb.id}-${row.id}-present`,
          category,
          korean: `${verb.pastKorean} · ${row.label} 현재`,
          hint: row.hint,
          arabic: row.present.arabic,
          pronunciation: row.present.pronunciation,
          searchText: buildSearchText(
            '동사',
            verb.pastKorean,
            verb.pastEnglish,
            row.label,
            row.hint,
            row.present.arabic,
            row.present.pronunciation,
          ),
        },
      )
    }
  }

  for (const verb of futureVerbs) {
    const category = `미래시제 · ${verb.futureKorean}`
    entries.push({
      id: `future-${verb.id}-summary`,
      category,
      korean: verb.futureKorean,
      hint: verb.futureEnglish,
      arabic: verb.heFuture.arabic,
      pronunciation: verb.heFuture.pronunciation,
      searchText: buildSearchText(
        '미래시제',
        verb.futureKorean,
        verb.futureEnglish,
        verb.heFuture.arabic,
        verb.heFuture.pronunciation,
      ),
    })

    for (const row of verb.rows) {
      entries.push({
        id: `future-${verb.id}-${row.id}`,
        category,
        korean: `${verb.futureKorean} · ${row.label}`,
        hint: row.hint,
        arabic: row.future.arabic,
        pronunciation: row.future.pronunciation,
        searchText: buildSearchText(
          '미래시제',
          verb.futureKorean,
          verb.futureEnglish,
          row.label,
          row.hint,
          row.future.arabic,
          row.future.pronunciation,
        ),
      })
    }
  }

  for (const letter of arabicAlphabet) {
    entries.push({
      id: `alphabet-${letter.id}`,
      category: '아랍어 알파벳',
      korean: letter.nameKorean,
      hint: letter.nameEnglish,
      arabic: letter.forms.isolated,
      pronunciation: letter.pronunciation,
      searchText: buildSearchText(
        '아랍어 알파벳',
        letter.nameKorean,
        letter.nameEnglish,
        letter.pronunciation,
        letter.forms.isolated,
        letter.forms.initial,
        letter.forms.medial ?? '',
        letter.forms.final,
      ),
    })
  }

  for (const item of suffixPronouns) {
    const category = '접미 인칭대명사'
    entries.push(
      {
        id: `suffix-${item.id}-standalone`,
        category,
        korean: `${item.korean} · 독립형`,
        hint: item.hint,
        arabic: item.standaloneArabic,
        pronunciation: item.standalonePronunciation,
        searchText: buildSearchText(
          category,
          item.korean,
          item.hint,
          '독립형',
          item.standaloneArabic,
          item.standalonePronunciation,
        ),
      },
      {
        id: `suffix-${item.id}-suffix`,
        category,
        korean: `${item.korean} · 접미사`,
        hint: item.hint,
        arabic: item.suffixArabic,
        pronunciation: item.suffixPronunciation,
        searchText: buildSearchText(
          category,
          item.korean,
          item.hint,
          '접미사',
          item.suffixArabic,
          item.suffixPronunciation,
        ),
      },
    )

    for (const [index, example] of item.examples.entries()) {
      entries.push({
        id: `suffix-${item.id}-example-${index}`,
        category,
        korean: example.korean,
        hint: example.hint,
        arabic: example.arabic,
        pronunciation: example.pronunciation,
        searchText: buildSearchText(
          category,
          item.korean,
          example.korean,
          example.hint,
          example.arabic,
          example.pronunciation,
        ),
      })
    }
  }

  return entries
}

const searchIndex = buildIndex()

export function searchStudyContent(query: string, limit = 80): SearchEntry[] {
  const normalized = normalizeForSearch(query)
  if (!normalized) return []

  const tokens = normalized.split(/\s+/).filter(Boolean)
  const results: IndexedEntry[] = []

  for (const entry of searchIndex) {
    if (tokens.every((token) => entry.searchText.includes(token))) {
      results.push(entry)
      if (results.length >= limit) break
    }
  }

  return results.map(({ searchText: _searchText, ...entry }) => entry)
}

export const searchIndexSize = searchIndex.length
