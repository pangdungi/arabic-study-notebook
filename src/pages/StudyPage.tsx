import { useEffect, useState } from 'react'
import { FutureTenseDeckSection } from '../components/FutureTenseDeckSection'
import { VerbDeckSection } from '../components/VerbDeckSection'
import { AlphabetSection } from '../components/AlphabetSection'
import { CaseVowelSection } from '../components/CaseVowelSection'
import { SingularPluralSection } from '../components/SingularPluralSection'
import { NegationTrainingSection } from '../components/NegationTrainingSection'
import { SearchSection } from '../components/SearchSection'
import { SuffixPronounSection } from '../components/SuffixPronounSection'
import { StudySubMenu } from '../components/StudySubMenu'
import { WordCardSection } from '../components/WordCardSection'
import { adverbs } from '../data/adverbs'
import { arabicNumbers } from '../data/arabicNumbers'
import { conjunctions } from '../data/conjunctions'
import { demonstrativePronouns } from '../data/demonstrativePronouns'
import { interrogatives } from '../data/interrogatives'
import { getNegationCategory, negationCategories } from '../data/negation'
import { prepositions } from '../data/prepositions'
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
import { weekdayNouns } from '../data/weekdayNouns'
import { conversationPhrases } from '../data/conversationPhrases'
import { touchRegistry } from '../lib/registry'

type StudyView =
  | 'home'
  | 'personal-pronouns'
  | 'suffix-pronouns'
  | 'demonstrative-pronouns'
  | 'adverbs'
  | 'arabic-numbers'
  | 'interrogatives'
  | 'conjunctions'
  | 'prepositions'
  | 'adjectives-menu'
  | 'size-quantity-adjectives'
  | 'general-adjectives'
  | 'nouns-menu'
  | 'time-nouns'
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
  | 'case-vowels'
  | 'singular-plural'
  | 'verbs'
  | 'future-tense'
  | 'conversation-phrases'

export function StudyPage() {
  const [view, setView] = useState<StudyView>('home')
  const [negationCategoryId, setNegationCategoryId] = useState(negationCategories[0]?.id ?? '')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    touchRegistry()
  }, [])

  if (view === 'personal-pronouns') {
    return (
      <main className="study-page">
        <WordCardSection
          title="인칭대명사"
          items={personalPronouns}
          onBack={() => setView('home')}
        />
      </main>
    )
  }

  if (view === 'suffix-pronouns') {
    return (
      <main className="study-page">
        <SuffixPronounSection onBack={() => setView('home')} />
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
        />
      </main>
    )
  }

  if (view === 'adverbs') {
    return (
      <main className="study-page">
        <WordCardSection
          title="부사"
          items={adverbs}
          onBack={() => setView('home')}
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
          onBack={() => setView('home')}
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
        />
      </main>
    )
  }

  if (view === 'alphabet') {
    return (
      <main className="study-page">
        <AlphabetSection onBack={() => setView('home')} />
      </main>
    )
  }

  if (view === 'case-vowels') {
    return (
      <main className="study-page">
        <CaseVowelSection onBack={() => setView('home')} />
      </main>
    )
  }

  if (view === 'singular-plural') {
    return (
      <main className="study-page">
        <SingularPluralSection onBack={() => setView('home')} />
      </main>
    )
  }

  if (view === 'verbs') {
    return (
      <main className="study-page">
        <VerbDeckSection onBack={() => setView('home')} />
      </main>
    )
  }

  if (view === 'future-tense') {
    return (
      <main className="study-page">
        <FutureTenseDeckSection onBack={() => setView('home')} />
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
        />
      </main>
    )
  }

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
          className="study-nav-btn"
          onClick={() => setView('alphabet')}
        >
          아랍어 알파벳
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
          onClick={() => setView('adverbs')}
        >
          부사
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
