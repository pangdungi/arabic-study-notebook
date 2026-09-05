import { useMemo, useState } from 'react'
import { getFutureVerb } from '../data/futureTense'
import type { FutureVerbItem } from '../data/futureTense'
import { getVerb } from '../data/verbs'
import type { VerbItem } from '../data/verbs'
import {
  DAILY_REVIEW_COUNT,
  getDailyReviewCompletedIds,
  getDailyReviewEntries,
  getDailyReviewSummary,
  toggleDailyReviewComplete,
} from '../lib/dailyReview'
import type { SearchEntry } from '../lib/searchIndex'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'
import { FutureConjugationModal } from './FutureConjugationModal'
import { VerbConjugationModal } from './VerbConjugationModal'

type DailyReviewSectionProps = {
  onBack: () => void
}

function ReviewCard({
  item,
  completed,
  onToggleComplete,
  onOpenVerb,
  onOpenFutureVerb,
}: {
  item: SearchEntry
  completed: boolean
  onToggleComplete: (entryId: string) => void
  onOpenVerb: (verb: VerbItem) => void
  onOpenFutureVerb: (verb: FutureVerbItem) => void
}) {
  const verb = item.verbId ? getVerb(item.verbId) : undefined
  const futureVerb = item.futureVerbId ? getFutureVerb(item.futureVerbId) : undefined

  const frontLabel = item.verbId ? '과거' : item.futureVerbId ? '미래' : item.category
  const backLabel = item.verbId ? '후와 · 과거' : item.futureVerbId ? '후와 · 미래' : item.category

  return (
    <li className={`study-card daily-review-card${completed ? ' daily-review-card--done' : ''}`}>
      <FlipCard
        ariaLabel={item.korean}
        front={
          <>
            <span className="daily-review-card__label">{frontLabel}</span>
            <span className="pronoun-card__korean">{item.korean}</span>
            {item.hint ? <span className="pronoun-card__hint">({item.hint})</span> : null}
          </>
        }
        back={
          <>
            <span className="daily-review-card__label">{backLabel}</span>
            <span className="pronoun-card__arabic" dir="rtl" lang="ar">
              {item.arabic}
            </span>
            <span className="pronoun-card__pronunciation">{item.pronunciation}</span>
          </>
        }
      />
      <ArabicSpeechButton text={item.arabic} label={`${item.korean} 아랍어 듣기`} />
      {verb ? (
        <button
          type="button"
          className="verb-card__conjugation-btn"
          onClick={(event) => {
            event.stopPropagation()
            onOpenVerb(verb)
          }}
        >
          변화 보기
        </button>
      ) : null}
      {futureVerb ? (
        <button
          type="button"
          className="verb-card__conjugation-btn"
          onClick={(event) => {
            event.stopPropagation()
            onOpenFutureVerb(futureVerb)
          }}
        >
          변화 보기
        </button>
      ) : null}
      <button
        type="button"
        className={`daily-review-card__done-btn${completed ? ' daily-review-card__done-btn--active' : ''}`}
        onClick={() => onToggleComplete(item.id)}
      >
        {completed ? '복습 완료 ✓' : '복습 완료'}
      </button>
    </li>
  )
}

export function DailyReviewSection({ onBack }: DailyReviewSectionProps) {
  const [summary, setSummary] = useState(() => getDailyReviewSummary())
  const [completedIds, setCompletedIds] = useState(() => getDailyReviewCompletedIds())
  const entries = useMemo(() => getDailyReviewEntries(), [summary.date])
  const [modalVerb, setModalVerb] = useState<VerbItem | null>(null)
  const [modalFutureVerb, setModalFutureVerb] = useState<FutureVerbItem | null>(null)

  const handleToggleComplete = (entryId: string) => {
    toggleDailyReviewComplete(entryId)
    setSummary(getDailyReviewSummary())
    setCompletedIds(getDailyReviewCompletedIds())
  }

  const progressPercent =
    summary.total > 0 ? Math.round((summary.completed / summary.total) * 100) : 0

  return (
    <section className="pronoun-section daily-review-section">
      <header className="pronoun-section__header">
        <button type="button" className="study-nav-btn" onClick={onBack}>
          뒤로
        </button>
        <h1 className="pronoun-section__title">오늘의 복습</h1>
      </header>

      <div className="daily-review-intro">
        <p className="daily-review-intro__summary">
          하루 <strong>{DAILY_REVIEW_COUNT}장</strong>씩, 최근 14일 동안 나온 카드는 피해서 골라
          드립니다. 카드를 뒤집어 보고 <strong>복습 완료</strong>를 눌러 주세요.
        </p>
        <div className="daily-review-progress" aria-label={`복습 진행 ${summary.completed}/${summary.total}`}>
          <div className="daily-review-progress__meta">
            <span>
              {summary.completed}/{summary.total} 완료
            </span>
            <span>{summary.date}</span>
          </div>
          <div className="daily-review-progress__track">
            <div
              className="daily-review-progress__bar"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
        {summary.isComplete ? (
          <p className="daily-review-intro__complete">오늘 복습을 모두 마쳤습니다.</p>
        ) : null}
      </div>

      <ul className="pronoun-list">
        {entries.map((item) => (
          <ReviewCard
            key={item.id}
            item={item}
            completed={completedIds.includes(item.id)}
            onToggleComplete={handleToggleComplete}
            onOpenVerb={setModalVerb}
            onOpenFutureVerb={setModalFutureVerb}
          />
        ))}
      </ul>

      {modalVerb ? (
        <VerbConjugationModal verb={modalVerb} onClose={() => setModalVerb(null)} />
      ) : null}
      {modalFutureVerb ? (
        <FutureConjugationModal verb={modalFutureVerb} onClose={() => setModalFutureVerb(null)} />
      ) : null}
    </section>
  )
}
