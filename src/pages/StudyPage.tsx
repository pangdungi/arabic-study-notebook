import { useEffect, useState } from 'react'
import { FutureTenseDeckSection } from '../components/FutureTenseDeckSection'
import { VerbDeckSection } from '../components/VerbDeckSection'
import { AlphabetSection } from '../components/AlphabetSection'
import { CaseVowelPracticeSection } from '../components/CaseVowelPracticeSection'
import { CaseVowelSection } from '../components/CaseVowelSection'
import { SingularPluralSection } from '../components/SingularPluralSection'
import { NegationTrainingSection } from '../components/NegationTrainingSection'
import { SearchSection } from '../components/SearchSection'
import { DefiniteArticleSection } from '../components/DefiniteArticleSection'
import { DailyReviewSection } from '../components/DailyReviewSection'
import { SuffixPronounSection } from '../components/SuffixPronounSection'
import { StudySubMenu } from '../components/StudySubMenu'
import { PracticeSection } from '../components/PracticeSection'
import { WordCardSection } from '../components/WordCardSection'
import { degreeAdverbs } from '../data/degreeAdverbs'
import { directionAdverbs } from '../data/directionAdverbs'
import { frequencyAdverbs } from '../data/frequencyAdverbs'
import { restrictiveAdverbs } from '../data/restrictiveAdverbs'
import { timeAdverbs } from '../data/timeAdverbs'
import { arabicAlphabet } from '../data/arabicAlphabet'
import { arabicNumbers } from '../data/arabicNumbers'
import { caseVowelNounSets } from '../data/caseVowels'
import { conjunctions } from '../data/conjunctions'
import { definiteArticleExamples } from '../data/definiteArticle'
import { demonstrativePronouns } from '../data/demonstrativePronouns'
import { futureVerbs } from '../data/futureTense'
import { interrogatives } from '../data/interrogatives'
import { getNegationCategory, negationCategories } from '../data/negation'
import type { PracticeCard } from '../data/practiceCard'
import { prepositions, prepositionsIntro } from '../data/prepositions'
import { personalPronouns } from '../data/personalPronouns'
import { generalAdjectives } from '../data/generalAdjectives'
import { sizeQuantityAdjectives } from '../data/sizeQuantityAdjectives'
import { countryNouns } from '../data/countryNouns'
import { placeNouns } from '../data/placeNouns'
import { objectNouns } from '../data/objectNouns'
import { generalNouns } from '../data/generalNouns'
import { foodNouns } from '../data/foodNouns'
import { hospitalNouns } from '../data/hospitalNouns'
import { peopleNouns } from '../data/peopleNouns'
import { timeNouns } from '../data/timeNouns'
import { dateNouns } from '../data/dateNouns'
import { weekdayNouns } from '../data/weekdayNouns'
import { conversationPhrases } from '../data/conversationPhrases'
import { singularPluralGroups } from '../data/singularPlural'
import { suffixPronouns } from '../data/suffixPronouns'
import { verbs } from '../data/verbs'
import { getVerbPatternForm, getVerbsForPattern, verbPatternForms } from '../data/verbPatterns'
import { touchRegistry } from '../lib/registry'
import { getDailyReviewSummary } from '../lib/dailyReview'
import {
  fromAlphabet,
  fromDefiniteArticleExamples,
  fromFutureVerbs,
  fromNegationItems,
  fromSingularPluralGroups,
  fromStudyCards,
  fromSuffixPronouns,
  fromVerbs,
  shufflePracticeCards,
} from '../lib/practiceDecks'

type StudyView =
  | 'home'
  | 'personal-pronouns'
  | 'suffix-pronouns'
  | 'demonstrative-pronouns'
  | 'direction-adverbs'
  | 'frequency-adverbs'
  | 'time-adverbs'
  | 'degree-adverbs'
  | 'restrictive-adverbs'
  | 'arabic-numbers'
  | 'interrogatives'
  | 'conjunctions'
  | 'prepositions'
  | 'adjectives-menu'
  | 'size-quantity-adjectives'
  | 'general-adjectives'
  | 'nouns-menu'
  | 'time-nouns'
  | 'date-nouns'
  | 'weekday-nouns'
  | 'people-nouns'
  | 'hospital-nouns'
  | 'food-nouns'
  | 'object-nouns'
  | 'place-nouns'
  | 'country-nouns'
  | 'general-nouns'
  | 'negation-menu'
  | 'negation-training'
  | 'alphabet'
  | 'definite-article'
  | 'case-vowels'
  | 'case-vowel-practice'
  | 'singular-plural'
  | 'verb-types-menu'
  | 'verb-form'
  | 'verbs'
  | 'future-tense'
  | 'conversation-phrases'
  | 'daily-review'
  | 'practice'

type PracticeSession = {
  title: string
  cards: PracticeCard[]
  returnView: Exclude<StudyView, 'practice'>
  variant?: 'arabic-first' | 'korean-first'
}

export function StudyPage() {
  const [view, setView] = useState<StudyView>('home')
  const [negationCategoryId, setNegationCategoryId] = useState(negationCategories[0]?.id ?? '')
  const [verbFormId, setVerbFormId] = useState(verbPatternForms[0]?.id ?? 'form-1')
  const [searchQuery, setSearchQuery] = useState('')
  const [practiceSession, setPracticeSession] = useState<PracticeSession | null>(null)

  useEffect(() => {
    touchRegistry()
  }, [])

  const openPractice = (
    title: string,
    cards: PracticeCard[],
    returnView: PracticeSession['returnView'],
    variant: PracticeSession['variant'] = 'korean-first',
  ) => {
    setPracticeSession({
      title,
      cards: shufflePracticeCards(cards),
      returnView,
      variant,
    })
    setView('practice')
  }

  const closePractice = () => {
    if (!practiceSession) return
    setView(practiceSession.returnView)
    setPracticeSession(null)
  }

  const makePractice = (
    title: string,
    getCards: () => PracticeCard[],
    returnView: PracticeSession['returnView'],
    variant: PracticeSession['variant'] = 'korean-first',
  ) => ({
    onPractice: () => openPractice(title, getCards(), returnView, variant),
  })

  if (view === 'practice' && practiceSession) {
    return (
      <main className="study-page">
        <PracticeSection
          title={practiceSession.title}
          cards={practiceSession.cards}
          onBack={closePractice}
          variant={practiceSession.variant}
        />
      </main>
    )
  }

  if (view === 'personal-pronouns') {
    return (
      <main className="study-page">
        <WordCardSection
          title="인칭대명사"
          items={personalPronouns}
          onBack={() => setView('home')}
          {...makePractice('인칭대명사', () => fromStudyCards(personalPronouns), 'personal-pronouns')}
        />
      </main>
    )
  }

  if (view === 'suffix-pronouns') {
    return (
      <main className="study-page">
        <SuffixPronounSection
          onBack={() => setView('home')}
          {...makePractice(
            '접미 인칭대명사',
            () => fromSuffixPronouns(suffixPronouns),
            'suffix-pronouns',
          )}
        />
      </main>
    )
  }

  if (view === 'demonstrative-pronouns') {
    return (
      <main className="study-page">
        <WordCardSection
          title="지시대명사"
          items={demonstrativePronouns}
          onBack={() => setView('home')}
          {...makePractice(
            '지시대명사',
            () => fromStudyCards(demonstrativePronouns),
            'demonstrative-pronouns',
          )}
        />
      </main>
    )
  }

  if (view === 'direction-adverbs') {
    return (
      <main className="study-page">
        <WordCardSection
          title="방향"
          items={directionAdverbs}
          onBack={() => setView('home')}
          {...makePractice('방향', () => fromStudyCards(directionAdverbs), 'direction-adverbs')}
        />
      </main>
    )
  }

  if (view === 'frequency-adverbs') {
    return (
      <main className="study-page">
        <WordCardSection
          title="빈도부사"
          items={frequencyAdverbs}
          onBack={() => setView('home')}
          {...makePractice('빈도부사', () => fromStudyCards(frequencyAdverbs), 'frequency-adverbs')}
        />
      </main>
    )
  }

  if (view === 'time-adverbs') {
    return (
      <main className="study-page">
        <WordCardSection
          title="시간부사"
          items={timeAdverbs}
          onBack={() => setView('home')}
          {...makePractice('시간부사', () => fromStudyCards(timeAdverbs), 'time-adverbs')}
        />
      </main>
    )
  }

  if (view === 'degree-adverbs') {
    return (
      <main className="study-page">
        <WordCardSection
          title="정도부사"
          items={degreeAdverbs}
          onBack={() => setView('home')}
          {...makePractice('정도부사', () => fromStudyCards(degreeAdverbs), 'degree-adverbs')}
        />
      </main>
    )
  }

  if (view === 'restrictive-adverbs') {
    return (
      <main className="study-page">
        <WordCardSection
          title="한정부사"
          items={restrictiveAdverbs}
          onBack={() => setView('home')}
          {...makePractice('한정부사', () => fromStudyCards(restrictiveAdverbs), 'restrictive-adverbs')}
        />
      </main>
    )
  }

  if (view === 'arabic-numbers') {
    return (
      <main className="study-page">
        <WordCardSection
          title="아랍어 숫자"
          items={arabicNumbers}
          onBack={() => setView('home')}
          {...makePractice('아랍어 숫자', () => fromStudyCards(arabicNumbers), 'arabic-numbers')}
        />
      </main>
    )
  }

  if (view === 'interrogatives') {
    return (
      <main className="study-page">
        <WordCardSection
          title="의문사"
          items={interrogatives}
          onBack={() => setView('home')}
          {...makePractice(
            '의문사',
            () => fromStudyCards(interrogatives),
            'interrogatives',
          )}
        />
      </main>
    )
  }

  if (view === 'conjunctions') {
    return (
      <main className="study-page">
        <WordCardSection
          title="접속사"
          items={conjunctions}
          onBack={() => setView('home')}
          {...makePractice('접속사', () => fromStudyCards(conjunctions), 'conjunctions')}
        />
      </main>
    )
  }

  if (view === 'prepositions') {
    return (
      <main className="study-page">
        <WordCardSection
          title="전치사"
          items={prepositions}
          introBullets={prepositionsIntro.bullets}
          onBack={() => setView('home')}
          {...makePractice('전치사', () => fromStudyCards(prepositions), 'prepositions')}
        />
      </main>
    )
  }

  if (view === 'adjectives-menu') {
    return (
      <main className="study-page">
        <StudySubMenu
          title="형용사"
          onBack={() => setView('home')}
          items={[
            {
              id: 'size-quantity-adjectives',
              label: '양·크기',
              onClick: () => setView('size-quantity-adjectives'),
            },
            {
              id: 'general-adjectives',
              label: '일반',
              onClick: () => setView('general-adjectives'),
            },
          ]}
        />
      </main>
    )
  }

  if (view === 'size-quantity-adjectives') {
    return (
      <main className="study-page">
        <WordCardSection
          title="양·크기 형용사"
          items={sizeQuantityAdjectives}
          onBack={() => setView('adjectives-menu')}
          {...makePractice(
            '양·크기 형용사',
            () => fromStudyCards(sizeQuantityAdjectives),
            'size-quantity-adjectives',
          )}
        />
      </main>
    )
  }

  if (view === 'general-adjectives') {
    return (
      <main className="study-page">
        <WordCardSection
          title="일반 형용사"
          items={generalAdjectives}
          onBack={() => setView('adjectives-menu')}
          {...makePractice(
            '일반 형용사',
            () => fromStudyCards(generalAdjectives),
            'general-adjectives',
          )}
        />
      </main>
    )
  }

  if (view === 'nouns-menu') {
    return (
      <main className="study-page">
        <StudySubMenu
          title="명사"
          onBack={() => setView('home')}
          items={[
            {
              id: 'time-nouns',
              label: '시간명사',
              onClick: () => setView('time-nouns'),
            },
            {
              id: 'date-nouns',
              label: '날짜 명사',
              onClick: () => setView('date-nouns'),
            },
            {
              id: 'weekday-nouns',
              label: '요일명사',
              onClick: () => setView('weekday-nouns'),
            },
            {
              id: 'people-nouns',
              label: '사람',
              onClick: () => setView('people-nouns'),
            },
            {
              id: 'hospital-nouns',
              label: '병원',
              onClick: () => setView('hospital-nouns'),
            },
            {
              id: 'food-nouns',
              label: '음식',
              onClick: () => setView('food-nouns'),
            },
            {
              id: 'object-nouns',
              label: '사물',
              onClick: () => setView('object-nouns'),
            },
            {
              id: 'place-nouns',
              label: '장소',
              onClick: () => setView('place-nouns'),
            },
            {
              id: 'country-nouns',
              label: '국가',
              onClick: () => setView('country-nouns'),
            },
            {
              id: 'general-nouns',
              label: '일반 명사',
              onClick: () => setView('general-nouns'),
            },
          ]}
        />
      </main>
    )
  }

  if (view === 'time-nouns') {
    return (
      <main className="study-page">
        <WordCardSection
          title="시간명사"
          items={timeNouns}
          onBack={() => setView('nouns-menu')}
          {...makePractice('시간명사', () => fromStudyCards(timeNouns), 'time-nouns')}
        />
      </main>
    )
  }

  if (view === 'date-nouns') {
    return (
      <main className="study-page">
        <WordCardSection
          title="날짜 명사"
          items={dateNouns}
          onBack={() => setView('nouns-menu')}
          {...makePractice('날짜 명사', () => fromStudyCards(dateNouns), 'date-nouns')}
        />
      </main>
    )
  }

  if (view === 'weekday-nouns') {
    return (
      <main className="study-page">
        <WordCardSection
          title="요일명사"
          items={weekdayNouns}
          onBack={() => setView('nouns-menu')}
          {...makePractice('요일명사', () => fromStudyCards(weekdayNouns), 'weekday-nouns')}
        />
      </main>
    )
  }

  if (view === 'people-nouns') {
    return (
      <main className="study-page">
        <WordCardSection
          title="사람"
          items={peopleNouns}
          onBack={() => setView('nouns-menu')}
          {...makePractice('사람', () => fromStudyCards(peopleNouns), 'people-nouns')}
        />
      </main>
    )
  }

  if (view === 'hospital-nouns') {
    return (
      <main className="study-page">
        <WordCardSection
          title="병원"
          items={hospitalNouns}
          onBack={() => setView('nouns-menu')}
          {...makePractice('병원', () => fromStudyCards(hospitalNouns), 'hospital-nouns')}
        />
      </main>
    )
  }

  if (view === 'food-nouns') {
    return (
      <main className="study-page">
        <WordCardSection
          title="음식"
          items={foodNouns}
          onBack={() => setView('nouns-menu')}
          {...makePractice('음식', () => fromStudyCards(foodNouns), 'food-nouns')}
        />
      </main>
    )
  }

  if (view === 'object-nouns') {
    return (
      <main className="study-page">
        <WordCardSection
          title="사물"
          items={objectNouns}
          onBack={() => setView('nouns-menu')}
          {...makePractice('사물', () => fromStudyCards(objectNouns), 'object-nouns')}
        />
      </main>
    )
  }

  if (view === 'place-nouns') {
    return (
      <main className="study-page">
        <WordCardSection
          title="장소"
          items={placeNouns}
          onBack={() => setView('nouns-menu')}
          {...makePractice('장소', () => fromStudyCards(placeNouns), 'place-nouns')}
        />
      </main>
    )
  }

  if (view === 'country-nouns') {
    return (
      <main className="study-page">
        <WordCardSection
          title="국가"
          items={countryNouns}
          onBack={() => setView('nouns-menu')}
          {...makePractice('국가', () => fromStudyCards(countryNouns), 'country-nouns')}
        />
      </main>
    )
  }

  if (view === 'general-nouns') {
    return (
      <main className="study-page">
        <WordCardSection
          title="일반 명사"
          items={generalNouns}
          onBack={() => setView('nouns-menu')}
          {...makePractice('일반 명사', () => fromStudyCards(generalNouns), 'general-nouns')}
        />
      </main>
    )
  }

  if (view === 'negation-menu') {
    return (
      <main className="study-page">
        <StudySubMenu
          title="부정"
          onBack={() => setView('home')}
          items={negationCategories.map((category) => ({
            id: category.id,
            label: category.title,
            onClick: () => {
              setNegationCategoryId(category.id)
              setView('negation-training')
            },
          }))}
        />
      </main>
    )
  }

  if (view === 'negation-training') {
    const category =
      getNegationCategory(negationCategoryId) ?? negationCategories[0]

    if (!category) {
      return (
        <main className="study-page">
          <StudySubMenu
            title="부정"
            onBack={() => setView('home')}
            items={negationCategories.map((item) => ({
              id: item.id,
              label: item.title,
              onClick: () => {
                setNegationCategoryId(item.id)
                setView('negation-training')
              },
            }))}
          />
        </main>
      )
    }

    return (
      <main className="study-page">
        <NegationTrainingSection
          category={category}
          onBack={() => setView('negation-menu')}
          {...makePractice(
            category.title,
            () => fromNegationItems(category.items),
            'negation-training',
          )}
        />
      </main>
    )
  }

  if (view === 'alphabet') {
    return (
      <main className="study-page">
        <AlphabetSection
          onBack={() => setView('home')}
          {...makePractice('아랍어 알파벳', () => fromAlphabet(arabicAlphabet), 'alphabet', 'arabic-first')}
        />
      </main>
    )
  }

  if (view === 'definite-article') {
    return (
      <main className="study-page">
        <DefiniteArticleSection
          onBack={() => setView('home')}
          {...makePractice(
            '정관사 ال',
            () => fromDefiniteArticleExamples(definiteArticleExamples),
            'definite-article',
          )}
        />
      </main>
    )
  }

  if (view === 'case-vowel-practice') {
    return (
      <main className="study-page">
        <CaseVowelPracticeSection
          title="격모음"
          sets={caseVowelNounSets}
          onBack={() => setView('case-vowels')}
        />
      </main>
    )
  }

  if (view === 'case-vowels') {
    return (
      <main className="study-page">
        <CaseVowelSection onBack={() => setView('home')} onPractice={() => setView('case-vowel-practice')} />
      </main>
    )
  }

  if (view === 'singular-plural') {
    return (
      <main className="study-page">
        <SingularPluralSection
          onBack={() => setView('home')}
          {...makePractice(
            '단복수',
            () => fromSingularPluralGroups(singularPluralGroups),
            'singular-plural',
          )}
        />
      </main>
    )
  }

  if (view === 'verb-types-menu') {
    return (
      <main className="study-page">
        <StudySubMenu
          title="동사 유형"
          onBack={() => setView('home')}
          items={verbPatternForms.map((form) => ({
            id: form.id,
            label: form.comingSoon ? `${form.label} · ${form.patternArabic}` : form.label,
            onClick: () => {
              setVerbFormId(form.id)
              setView('verb-form')
            },
          }))}
        />
      </main>
    )
  }

  if (view === 'verb-form') {
    const form = getVerbPatternForm(verbFormId) ?? verbPatternForms[0]
    const formVerbs = getVerbsForPattern(form)

    return (
      <main className="study-page">
        <VerbDeckSection
          title={`동사 유형 · ${form.label}`}
          items={formVerbs}
          pattern={form}
          onBack={() => setView('verb-types-menu')}
          {...(formVerbs.length > 0
            ? makePractice(
                `동사 유형 · ${form.label}`,
                () => fromVerbs(formVerbs),
                'verb-form',
              )
            : {})}
        />
      </main>
    )
  }

  if (view === 'verbs') {
    return (
      <main className="study-page">
        <VerbDeckSection
          items={verbs}
          onBack={() => setView('home')}
          {...makePractice('동사', () => fromVerbs(verbs), 'verbs')}
        />
      </main>
    )
  }

  if (view === 'future-tense') {
    return (
      <main className="study-page">
        <FutureTenseDeckSection
          onBack={() => setView('home')}
          {...makePractice('미래시제', () => fromFutureVerbs(futureVerbs), 'future-tense')}
        />
      </main>
    )
  }

  if (view === 'conversation-phrases') {
    return (
      <main className="study-page">
        <WordCardSection
          title="회화"
          items={conversationPhrases}
          onBack={() => setView('home')}
          {...makePractice(
            '회화',
            () => fromStudyCards(conversationPhrases),
            'conversation-phrases',
          )}
        />
      </main>
    )
  }

  if (view === 'daily-review') {
    return (
      <main className="study-page">
        <DailyReviewSection onBack={() => setView('home')} />
      </main>
    )
  }

  const reviewSummary = getDailyReviewSummary()

  return (
    <main className="study-page">
      <div className="study-search">
        <label className="study-search__label" htmlFor="study-search-input">
          검색
        </label>
        <div className="study-search__field">
          <input
            id="study-search-input"
            type="search"
            className="study-search__input"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="한글 · 영어 · 아랍어 · 발음"
            autoComplete="off"
            enterKeyHint="search"
          />
          {searchQuery ? (
            <button
              type="button"
              className="study-search__clear"
              onClick={() => setSearchQuery('')}
              aria-label="검색어 지우기"
            >
              지우기
            </button>
          ) : null}
        </div>
      </div>

      {searchQuery.trim() ? (
        <SearchSection query={searchQuery} />
      ) : (
        <div className="study-nav">
        <button
          type="button"
          className="study-nav-btn study-nav-btn--review"
          onClick={() => setView('daily-review')}
        >
          오늘의 복습 ({reviewSummary.completed}/{reviewSummary.total})
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('alphabet')}
        >
          아랍어 알파벳
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('direction-adverbs')}
        >
          방향
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('frequency-adverbs')}
        >
          빈도부사
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('time-adverbs')}
        >
          시간부사
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('degree-adverbs')}
        >
          정도부사
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('restrictive-adverbs')}
        >
          한정부사
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('definite-article')}
        >
          정관사 ال
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('case-vowels')}
        >
          격모음
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('singular-plural')}
        >
          단복수
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('personal-pronouns')}
        >
          인칭대명사
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('suffix-pronouns')}
        >
          접미 인칭대명사
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('demonstrative-pronouns')}
        >
          지시대명사
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('interrogatives')}
        >
          의문사
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('conjunctions')}
        >
          접속사
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('prepositions')}
        >
          전치사
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('adjectives-menu')}
        >
          형용사
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('arabic-numbers')}
        >
          아랍어 숫자
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('nouns-menu')}
        >
          명사
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('verbs')}
        >
          동사
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('verb-types-menu')}
        >
          동사 유형
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('future-tense')}
        >
          미래시제
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('negation-menu')}
        >
          부정
        </button>
        <button
          type="button"
          className="study-nav-btn"
          onClick={() => setView('conversation-phrases')}
        >
          회화
        </button>
        </div>
      )}
    </main>
  )
}
