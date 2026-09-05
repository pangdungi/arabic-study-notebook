import { useMemo, useState } from 'react'
import type { CaseVowelForm, CaseVowelNounSet } from '../data/caseVowels'
import { caseVowelNounSets } from '../data/caseVowels'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'

export type CaseVowelPracticeCard = CaseVowelForm & {
  nounKorean: string
  definiteLabel: string
}

type CaseVowelPracticeSectionProps = {
  title: string
  sets: CaseVowelNounSet[]
  onBack: () => void
}

function shuffleSets(sets: CaseVowelNounSet[]): CaseVowelNounSet[] {
  const result = [...sets]

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[result[index], result[swapIndex]] = [result[swapIndex], result[index]]
  }

  return result
}

function buildCaseVowelPracticeDeck(sets: CaseVowelNounSet[]): CaseVowelPracticeCard[] {
  return shuffleSets(sets).flatMap((set) =>
    set.forms.map((form) => ({
      ...form,
      nounKorean: set.nounKorean,
      definiteLabel: set.definiteLabel,
    })),
  )
}

export function CaseVowelPracticeSection({
  title,
  sets,
  onBack,
}: CaseVowelPracticeSectionProps) {
  const cards = useMemo(() => buildCaseVowelPracticeDeck(sets), [sets])
  const [index, setIndex] = useState(0)
  const card = cards[index]
  const isFirst = index === 0
  const isLast = index === cards.length - 1

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
    <section className="pronoun-section practice-section case-vowel-practice">
      <header className="pronoun-section__header pronoun-section__header--with-actions">
        <button type="button" className="study-nav-btn" onClick={onBack}>
          뒤로
        </button>
        <h1 className="pronoun-section__title">{title} · 연습</h1>
      </header>

      <div className="practice-intro">
        <p>
          앞면은 <strong>한국어</strong>, 뒤집으면 <strong>아랍어</strong> ·{' '}
          <strong>한글 발음</strong> · <strong>뜻</strong>이 나옵니다.
        </p>
        <p className="case-vowel-practice__meta">
          {card.nounKorean} · {card.definiteLabel} · {card.caseLabel}
        </p>
        <p className="practice-progress" aria-live="polite">
          {index + 1} / {cards.length}
        </p>
      </div>

      <div className="practice-stage">
        <div className="practice-card-shell">
          <FlipCard
            key={card.id}
            ariaLabel={`${card.nounKorean} ${card.korean} 연습 카드`}
            front={
              <>
                <span className="practice-card__prompt">한국어</span>
                <span className="practice-card__korean">{card.korean}</span>
                <span className="practice-card__hint">
                  {card.nounKorean} · {card.definiteLabel} · {card.caseLabel}
                </span>
              </>
            }
            back={
              <>
                <span className="practice-card__prompt">아랍어 · 발음 · 뜻</span>
                <span className="practice-card__arabic" dir="rtl" lang="ar">
                  {card.arabic}
                </span>
                <span className="practice-card__pronunciation">{card.pronunciation}</span>
                <span className="practice-card__korean">{card.korean}</span>
                <span className="practice-card__hint">
                  {card.caseLabel} · {card.roleKorean} · 끝에 {card.endingMark} ({card.endingKorean})
                </span>
              </>
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

export function getDefaultCaseVowelPracticeSets(): CaseVowelNounSet[] {
  return caseVowelNounSets
}
