import { useState } from 'react'
import type { VerbPatternForm } from '../data/verbPatterns'
import type { VerbItem } from '../data/verbs'
import { verbs as allVerbs } from '../data/verbs'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'
import { SectionHeader } from './SectionHeader'
import { VerbConjugationModal } from './VerbConjugationModal'

type VerbDeckSectionProps = {
  title?: string
  items?: VerbItem[]
  pattern?: VerbPatternForm
  onBack: () => void
  onPractice?: () => void
}

export function VerbDeckSection({
  title = '동사',
  items,
  pattern,
  onBack,
  onPractice,
}: VerbDeckSectionProps) {
  const [modalVerb, setModalVerb] = useState<VerbItem | null>(null)
  const deckItems = items ?? allVerbs
  const hasVerbs = deckItems.length > 0

  return (
    <section className="pronoun-section verb-deck-section">
      <SectionHeader title={title} onBack={onBack} onPractice={hasVerbs ? onPractice : undefined} />

      {pattern ? (
        <div className="case-vowel-intro verb-pattern-intro">
          <p className="case-vowel-intro__summary">
            <strong dir="rtl" lang="ar">
              {pattern.patternArabic}
            </strong>{' '}
            ({pattern.patternPronunciation})
            {pattern.examples ? <> · 예: {pattern.examples}</> : null}
          </p>
          <p className="verb-pattern-intro__note">{pattern.note}</p>
          {pattern.comingSoon ? (
            <p className="verb-pattern-intro__soon">예문 동사는 준비 중입니다.</p>
          ) : null}
        </div>
      ) : null}

      {!pattern ? (
        <p className="verb-deck-note">
          카드 앞면은 <strong>과거</strong> 뜻(영어·한국어)입니다. 눌러 뒤집으면{' '}
          <strong>후와(그)</strong>의 과거형 아랍어와 한글 발음이 나옵니다.
        </p>
      ) : hasVerbs ? (
        <p className="verb-deck-note">
          이 형의 대표 동사입니다. 카드를 눌러 <strong>후와(그)</strong> 과거형과 발음을 확인하세요.
        </p>
      ) : null}

      {hasVerbs ? (
        <ul className="pronoun-list verb-deck-list">
          {deckItems.map((verb) => (
            <li key={verb.id} className="study-card verb-card">
              <FlipCard
                ariaLabel={`${verb.pastEnglish} ${verb.pastKorean}`}
                front={
                  <>
                    <span className="verb-card__label">과거</span>
                    <span className="pronoun-card__korean">{verb.pastEnglish}</span>
                    <span className="pronoun-card__hint">({verb.pastKorean})</span>
                  </>
                }
                back={
                  <>
                    <span className="verb-card__label">후와 · 과거</span>
                    <span className="pronoun-card__arabic" dir="rtl" lang="ar">
                      {verb.hePast.arabic}
                    </span>
                    <span className="pronoun-card__pronunciation">{verb.hePast.pronunciation}</span>
                  </>
                }
              />
              <ArabicSpeechButton
                text={verb.hePast.arabic}
                label={`${verb.pastKorean} 후와 과거 듣기`}
              />
              <button
                type="button"
                className="verb-card__conjugation-btn"
                onClick={(event) => {
                  event.stopPropagation()
                  setModalVerb(verb)
                }}
              >
                변화 보기
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {modalVerb ? (
        <VerbConjugationModal verb={modalVerb} onClose={() => setModalVerb(null)} />
      ) : null}
    </section>
  )
}
