import { useMemo, useState } from 'react'
import { getFutureVerb } from '../data/futureTense'
import type { FutureVerbItem } from '../data/futureTense'
import { getVerb } from '../data/verbs'
import type { VerbItem } from '../data/verbs'
import { searchStudyContent } from '../lib/searchIndex'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'
import { FutureConjugationModal } from './FutureConjugationModal'
import { VerbConjugationModal } from './VerbConjugationModal'
import type { SearchEntry } from '../lib/searchIndex'

type SearchSectionProps = {
  query: string
}

function VerbSearchCard({
  item,
  onOpenConjugation,
}: {
  item: SearchEntry
  onOpenConjugation: (verb: VerbItem) => void
}) {
  const verb = getVerb(item.verbId!)

  return (
    <li className="study-card verb-card">
      <FlipCard
        ariaLabel={`${item.korean} ${item.hint ?? ''}`}
        front={
          <>
            <span className="verb-card__label">과거</span>
            <span className="pronoun-card__korean">{item.korean}</span>
            {item.hint ? <span className="pronoun-card__hint">({item.hint})</span> : null}
          </>
        }
        back={
          <>
            <span className="verb-card__label">후와 · 과거</span>
            <span className="pronoun-card__arabic" dir="rtl" lang="ar">
              {item.arabic}
            </span>
            <span className="pronoun-card__pronunciation">{item.pronunciation}</span>
          </>
        }
      />
      <ArabicSpeechButton text={item.arabic} label={`${item.hint ?? item.korean} 후와 과거 듣기`} />
      {verb ? (
        <button
          type="button"
          className="verb-card__conjugation-btn"
          onClick={(event) => {
            event.stopPropagation()
            onOpenConjugation(verb)
          }}
        >
          변화 보기
        </button>
      ) : null}
    </li>
  )
}

function FutureVerbSearchCard({
  item,
  onOpenConjugation,
}: {
  item: SearchEntry
  onOpenConjugation: (verb: FutureVerbItem) => void
}) {
  const verb = getFutureVerb(item.futureVerbId!)

  return (
    <li className="study-card verb-card">
      <FlipCard
        ariaLabel={`${item.korean} ${item.hint ?? ''}`}
        front={
          <>
            <span className="verb-card__label">미래</span>
            <span className="pronoun-card__korean">{item.korean}</span>
            {item.hint ? <span className="pronoun-card__hint">({item.hint})</span> : null}
          </>
        }
        back={
          <>
            <span className="verb-card__label">후와 · 미래</span>
            <span className="pronoun-card__arabic" dir="rtl" lang="ar">
              {item.arabic}
            </span>
            <span className="pronoun-card__pronunciation">{item.pronunciation}</span>
          </>
        }
      />
      <ArabicSpeechButton text={item.arabic} label={`${item.hint ?? item.korean} 후와 미래 듣기`} />
      {verb ? (
        <button
          type="button"
          className="verb-card__conjugation-btn"
          onClick={(event) => {
            event.stopPropagation()
            onOpenConjugation(verb)
          }}
        >
          변화 보기
        </button>
      ) : null}
    </li>
  )
}

export function SearchSection({ query }: SearchSectionProps) {
  const results = useMemo(() => searchStudyContent(query), [query])
  const [modalVerb, setModalVerb] = useState<VerbItem | null>(null)
  const [modalFutureVerb, setModalFutureVerb] = useState<FutureVerbItem | null>(null)

  if (!query.trim()) {
    return null
  }

  if (results.length === 0) {
    return (
      <div className="study-search-empty">
        <p>「{query}」에 맞는 항목이 없습니다.</p>
        <p className="study-search-empty__hint">한글로 검색해 보세요.</p>
      </div>
    )
  }

  return (
    <section className="study-search-results" aria-label="검색 결과">
      <p className="study-search-results__count">{results.length}개 결과</p>
      <ul className="pronoun-list">
        {results.map((item) => {
          if (item.verbId) {
            return (
              <VerbSearchCard
                key={item.id}
                item={item}
                onOpenConjugation={setModalVerb}
              />
            )
          }

          if (item.futureVerbId) {
            return (
              <FutureVerbSearchCard
                key={item.id}
                item={item}
                onOpenConjugation={setModalFutureVerb}
              />
            )
          }

          return (
            <li key={item.id} className="study-card">
              <FlipCard
                ariaLabel={item.korean}
                front={
                  <>
                    <span className="study-search-results__category">{item.category}</span>
                    <span className="pronoun-card__korean">{item.korean}</span>
                    {item.hint ? (
                      <span className="pronoun-card__hint">({item.hint})</span>
                    ) : null}
                  </>
                }
                back={
                  <>
                    <span className="study-search-results__category">{item.category}</span>
                    <span className="pronoun-card__arabic" dir="rtl" lang="ar">
                      {item.arabic}
                    </span>
                    <span className="pronoun-card__pronunciation">{item.pronunciation}</span>
                  </>
                }
              />
              <ArabicSpeechButton text={item.arabic} label={`${item.korean} 아랍어 듣기`} />
            </li>
          )
        })}
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
