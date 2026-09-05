import type { ArabicAlphabetLetter } from '../data/arabicAlphabet'
import type { DefiniteArticleExample } from '../data/definiteArticle'
import type { CaseVowelDrillItem } from '../data/caseVowels'
import type { FutureVerbItem } from '../data/futureTense'
import type { NegationDrillItem } from '../data/negation'
import type { PracticeCard } from '../data/practiceCard'
import type { SingularPluralDrillItem } from '../data/singularPlural'
import type { StudyCardItem } from '../data/studyCard'
import type { SuffixPronounItem } from '../data/suffixPronouns'
import type { VerbItem } from '../data/verbs'

function fromDrillItems(items: Array<{
  id: string
  korean: string
  hint: string
  arabic: string
  pronunciation: string
}>): PracticeCard[] {
  return items.map((item) => ({
    id: item.id,
    arabic: item.arabic,
    korean: item.korean,
    pronunciation: item.pronunciation,
    hint: item.hint,
  }))
}

export function shufflePracticeCards(cards: PracticeCard[]): PracticeCard[] {
  const result = [...cards]

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[result[index], result[swapIndex]] = [result[swapIndex], result[index]]
  }

  return result
}

export function fromStudyCards(items: StudyCardItem[]): PracticeCard[] {
  return items.map((item) => ({
    id: item.id,
    arabic: item.arabic,
    korean: item.korean,
    pronunciation: item.pronunciation,
    hint: item.hint ?? item.english,
  }))
}

export function fromVerbs(items: VerbItem[]): PracticeCard[] {
  return items.map((item) => ({
    id: item.id,
    arabic: item.hePast.arabic,
    korean: item.pastKorean,
    pronunciation: item.hePast.pronunciation,
    hint: item.pastEnglish,
  }))
}

export function fromFutureVerbs(items: FutureVerbItem[]): PracticeCard[] {
  return items.map((item) => ({
    id: item.id,
    arabic: item.heFuture.arabic,
    korean: item.futureKorean,
    pronunciation: item.heFuture.pronunciation,
    hint: item.futureEnglish,
  }))
}

export function fromAlphabet(items: ArabicAlphabetLetter[]): PracticeCard[] {
  return items.map((item) => ({
    id: item.id,
    arabic: item.forms.isolated,
    korean: item.nameKorean,
    pronunciation: item.pronunciation,
    hint: item.nameEnglish,
  }))
}

export function fromNegationItems(items: NegationDrillItem[]): PracticeCard[] {
  return fromDrillItems(items)
}

export function fromDefiniteArticleExamples(items: DefiniteArticleExample[]): PracticeCard[] {
  return items.map((item) => ({
    id: item.id,
    arabic: item.withAlArabic,
    korean: item.nounKorean,
    pronunciation: item.pronunciation,
    hint: `${item.letterClass === 'sun' ? '태양문자' : '달문자'} · ${item.readHow}`,
  }))
}

export function fromCaseVowelItems(items: CaseVowelDrillItem[]): PracticeCard[] {
  return fromDrillItems(items)
}

export function fromSingularPluralItems(items: SingularPluralDrillItem[]): PracticeCard[] {
  return fromDrillItems(items)
}

export function fromCaseVowelGroups(
  groups: Array<{ items: CaseVowelDrillItem[] }>,
): PracticeCard[] {
  return groups.flatMap((group) => fromCaseVowelItems(group.items))
}

export function fromSingularPluralGroups(
  groups: Array<{ items: SingularPluralDrillItem[] }>,
): PracticeCard[] {
  return groups.flatMap((group) => fromSingularPluralItems(group.items))
}

export function fromSuffixPronouns(items: SuffixPronounItem[]): PracticeCard[] {
  const cards: PracticeCard[] = []

  for (const item of items) {
    cards.push(
      {
        id: `${item.id}-standalone`,
        arabic: item.standaloneArabic,
        korean: `${item.korean} · 독립형`,
        pronunciation: item.standalonePronunciation,
        hint: item.hint,
      },
      {
        id: `${item.id}-suffix`,
        arabic: item.suffixArabic,
        korean: `${item.korean} · 접미사`,
        pronunciation: item.suffixPronunciation,
        hint: item.hint,
      },
    )

    for (const [index, example] of item.examples.entries()) {
      cards.push({
        id: `${item.id}-example-${index}`,
        arabic: example.arabic,
        korean: example.korean,
        pronunciation: example.pronunciation,
        hint: example.hint,
      })
    }
  }

  return cards
}
