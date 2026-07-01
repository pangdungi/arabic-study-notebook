import { useState } from 'react'
import type { VerbItem } from '../data/verbs'
import { verbs } from '../data/verbs'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'
import { VerbConjugationModal } from './VerbConjugationModal'

type VerbDeckSectionProps = {
  onBack: () => void
}

export function VerbDeckSection({ onBack }: VerbDeckSectionProps) {
  const [modalVerb, setModalVerb] = useState<VerbItem | null>(null)

  return (
    <section className="pronoun-section verb-deck-section">
      <header className="pronoun-section__header">
        <button type="button" className="study-nav-btn" onClick={onBack}>
          뒤로
        </button>
        <h1 className="pronoun-section__title">동사</h1>
      </header>

      <p className="verb-deck-note">
        카드 앞면은 <strong>과거</strong> 뜻(영어·한국어)입니다. 눌러 뒤집으면{' '}
        <strong>후와(그)</strong>의 과거형 아랍어와 한글 발음이 나옵니다.
      </p>

      <ul className="pronoun-list verb-deck-list">
        {verbs.map((verb) => (
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

      {modalVerb ? (
        <VerbConjugationModal verb={modalVerb} onClose={() => setModalVerb(null)} />
      ) : null}
    </section>
  )
}
