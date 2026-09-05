import { useState } from 'react'
import type { PracticeCard } from '../data/practiceCard'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'

type PracticeSectionProps = {
  title: string
  cards: PracticeCard[]
  onBack: () => void
  variant?: 'arabic-first' | 'korean-first'
}

export function PracticeSection({
  title,
  cards,
  onBack,
  variant = 'korean-first',
}: PracticeSectionProps) {
  const [index, setIndex] = useState(0)
  const card = cards[index]
  const isFirst = index === 0
  const isLast = index === cards.length - 1
  const isKoreanFirst = variant === 'korean-first'

  if (!card) {
    return (
      <section className="pronoun-section practice-section">
        <header className="pronoun-section__header">
          <button type="button" className="study-nav-btn" onClick={onBack}>
            뒤로
          </button>
          <h1 className="pronoun-section__title">{title} · 연습</h1>
        </header>
        <p className="practice-empty">연습할 카드가 없습니다.</p>
      </section>
    )
  }

  return (
    <section className="pronoun-section practice-section">
      <header className="pronoun-section__header pronoun-section__header--with-actions">
        <button type="button" className="study-nav-btn" onClick={onBack}>
          뒤로
        </button>
        <h1 className="pronoun-section__title">{title} · 연습</h1>
      </header>

      <div className="practice-intro">
        <p>
          {isKoreanFirst ? (
            <>
              앞면은 <strong>한국어</strong>, 뒤집으면 <strong>아랍어</strong> ·{' '}
              <strong>한글 발음</strong> · <strong>뜻</strong>이 나옵니다.
            </>
          ) : (
            <>
              앞면은 <strong>아랍어</strong>, 뒤집으면 <strong>뜻</strong>과{' '}
              <strong>한글 발음</strong>이 나옵니다.
            </>
          )}
        </p>
        <p className="practice-progress" aria-live="polite">
          {index + 1} / {cards.length}
        </p>
      </div>

      <div className="practice-stage">
        <div className="practice-card-shell">
          <FlipCard
            key={card.id}
            ariaLabel={`${card.korean} 연습 카드`}
            front={
              isKoreanFirst ? (
                <>
                  <span className="practice-card__prompt">한국어</span>
                  <span className="practice-card__korean">{card.korean}</span>
                  {card.hint ? (
                    <span className="practice-card__hint">({card.hint})</span>
                  ) : null}
                </>
              ) : (
                <>
                  <span className="practice-card__prompt">아랍어</span>
                  <span className="practice-card__arabic" dir="rtl" lang="ar">
                    {card.arabic}
                  </span>
                </>
              )
            }
            back={
              isKoreanFirst ? (
                <>
                  <span className="practice-card__prompt">아랍어 · 발음 · 뜻</span>
                  <span className="practice-card__arabic" dir="rtl" lang="ar">
                    {card.arabic}
                  </span>
                  <span className="practice-card__pronunciation">{card.pronunciation}</span>
                  <span className="practice-card__korean">{card.korean}</span>
                  {card.hint ? (
                    <span className="practice-card__hint">({card.hint})</span>
                  ) : null}
                </>
              ) : (
                <>
                  <span className="practice-card__prompt">뜻 · 발음</span>
                  <span className="practice-card__korean">{card.korean}</span>
                  {card.hint ? (
                    <span className="practice-card__hint">({card.hint})</span>
                  ) : null}
                  <span className="practice-card__pronunciation">{card.pronunciation}</span>
                </>
              )
            }
          />
          <ArabicSpeechButton text={card.arabic} label={`${card.korean} 아랍어 듣기`} />
        </div>
      </div>

      <div className="practice-controls">
        <button
          type="button"
          className="study-nav-btn"
          disabled={isFirst}
          onClick={() => setIndex((current) => current - 1)}
        >
          이전
        </button>
        <button
          type="button"
          className="study-nav-btn"
          disabled={isLast}
          onClick={() => setIndex((current) => current + 1)}
        >
          다음
        </button>
      </div>
    </section>
  )
}
