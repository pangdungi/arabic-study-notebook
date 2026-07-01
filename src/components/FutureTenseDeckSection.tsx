import { useState } from 'react'
import type { FutureVerbItem } from '../data/futureTense'
import { futureTenseIntro, futureVerbs } from '../data/futureTense'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'
import { FutureConjugationModal } from './FutureConjugationModal'

type FutureTenseDeckSectionProps = {
  onBack: () => void
}

export function FutureTenseDeckSection({ onBack }: FutureTenseDeckSectionProps) {
  const [modalVerb, setModalVerb] = useState<FutureVerbItem | null>(null)

  return (
    <section className="pronoun-section verb-deck-section">
      <header className="pronoun-section__header">
        <button type="button" className="study-nav-btn" onClick={onBack}>
          뒤로
        </button>
        <h1 className="pronoun-section__title">{futureTenseIntro.title}</h1>
      </header>

      <div className="case-vowel-intro">
        <p className="case-vowel-intro__summary">{futureTenseIntro.summary}</p>
        <ul className="case-vowel-intro__list">
          {futureTenseIntro.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>

      <ul className="pronoun-list future-pattern-list">
        {futureTenseIntro.patterns.map((pattern) => (
          <li key={pattern.id} className="study-card">
            <FlipCard
              ariaLabel={pattern.korean}
              front={
                <>
                  <span className="case-vowel-card__label">패턴</span>
                  <span className="pronoun-card__korean">{pattern.korean}</span>
                  <span className="pronoun-card__hint">({pattern.hint})</span>
                </>
              }
              back={
                <>
                  <span className="case-vowel-card__label">{pattern.note}</span>
                  <span className="pronoun-card__arabic" dir="rtl" lang="ar">
                    {pattern.arabic}
                  </span>
                  <span className="pronoun-card__pronunciation">{pattern.pronunciation}</span>
                </>
              }
            />
            <ArabicSpeechButton text={pattern.arabic} label={`${pattern.korean} 아랍어 듣기`} />
          </li>
        ))}
      </ul>

      <p className="verb-deck-note">
        아래 카드 앞면은 <strong>미래</strong> 뜻입니다. 눌러 뒤집으면{' '}
        <strong>후와(그)</strong>의 미래형 아랍어와 한글 발음이 나옵니다.
      </p>

      <ul className="pronoun-list verb-deck-list">
        {futureVerbs.map((verb) => (
          <li key={verb.id} className="study-card verb-card">
            <FlipCard
              ariaLabel={`${verb.futureEnglish} ${verb.futureKorean}`}
              front={
                <>
                  <span className="verb-card__label">미래</span>
                  <span className="pronoun-card__korean">{verb.futureEnglish}</span>
                  <span className="pronoun-card__hint">({verb.futureKorean})</span>
                </>
              }
              back={
                <>
                  <span className="verb-card__label">후와 · 미래</span>
                  <span className="pronoun-card__arabic" dir="rtl" lang="ar">
                    {verb.heFuture.arabic}
                  </span>
                  <span className="pronoun-card__pronunciation">
                    {verb.heFuture.pronunciation}
                  </span>
                </>
              }
            />
            <ArabicSpeechButton
              text={verb.heFuture.arabic}
              label={`${verb.futureKorean} 후와 미래 듣기`}
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
        <FutureConjugationModal verb={modalVerb} onClose={() => setModalVerb(null)} />
      ) : null}
    </section>
  )
}
