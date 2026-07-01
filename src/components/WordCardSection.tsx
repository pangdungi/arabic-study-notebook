import type { StudyCardItem } from '../data/studyCard'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'

type WordCardSectionProps = {
  title: string
  items: StudyCardItem[]
  onBack: () => void
}

export function WordCardSection({ title, items, onBack }: WordCardSectionProps) {
  return (
    <section className="pronoun-section">
      <header className="pronoun-section__header">
        <button type="button" className="study-nav-btn" onClick={onBack}>
          뒤로
        </button>
        <h1 className="pronoun-section__title">{title}</h1>
      </header>

      <ul className="pronoun-list">
        {items.map((item) => (
          <li key={item.id} className="study-card">
            <FlipCard
              ariaLabel={item.korean}
              front={
                <>
                  <span className="pronoun-card__korean">{item.korean}</span>
                  {item.hint ? (
                    <span className="pronoun-card__hint">({item.hint})</span>
                  ) : null}
                </>
              }
              back={
                <>
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
