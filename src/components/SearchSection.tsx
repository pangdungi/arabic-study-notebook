import { useMemo } from 'react'
import { searchStudyContent } from '../lib/searchIndex'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'

type SearchSectionProps = {
  query: string
}

export function SearchSection({ query }: SearchSectionProps) {
  const results = useMemo(() => searchStudyContent(query), [query])

  if (!query.trim()) {
    return null
  }

  if (results.length === 0) {
    return (
      <div className="study-search-empty">
        <p>「{query}」에 맞는 항목이 없습니다.</p>
        <p className="study-search-empty__hint">한글, 영어, 아랍어, 발음으로 검색해 보세요.</p>
      </div>
    )
  }

  return (
    <section className="study-search-results" aria-label="검색 결과">
      <p className="study-search-results__count">{results.length}개 결과</p>
      <ul className="pronoun-list">
        {results.map((item) => (
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
        ))}
      </ul>
    </section>
  )
}
