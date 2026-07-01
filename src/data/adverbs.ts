import { demonstrativeAdverbsDirection } from './demonstrativeAdverbsDirection'
import { demonstrativeAdverbsPlace } from './demonstrativeAdverbsPlace'
import { demonstrativeAdverbsTime } from './demonstrativeAdverbsTime'
import { degreeAdverbs } from './degreeAdverbs'
import { nounToAdverbItems } from './nounToAdverb'
import { restrictiveAdverbs } from './restrictiveAdverbs'
import type { StudyCardItem } from './studyCard'
import { timeAdverbs } from './timeAdverbs'

function mergeById(items: StudyCardItem[]): StudyCardItem[] {
  const seen = new Set<string>()
  const merged: StudyCardItem[] = []

  for (const item of items) {
    if (seen.has(item.id)) continue
    seen.add(item.id)
    merged.push(item)
  }

  return merged
}

function nounToAdverbCard(item: {
  id: string
  adverbKorean: string
  hint: string
  adverbArabic: string
  adverbPronunciation: string
}): StudyCardItem {
  return {
    id: `noun-adv-${item.id}`,
    korean: item.adverbKorean,
    hint: item.hint,
    english: item.hint,
    arabic: item.adverbArabic,
    pronunciation: item.adverbPronunciation,
  }
}

export const adverbs = mergeById([
  ...demonstrativeAdverbsPlace,
  ...demonstrativeAdverbsDirection,
  ...demonstrativeAdverbsTime,
  ...timeAdverbs,
  ...restrictiveAdverbs,
  ...degreeAdverbs,
  ...nounToAdverbItems.map(nounToAdverbCard),
])
