import type { StudyCardItem } from '../data/studyCard'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'
import { SectionHeader } from './SectionHeader'

type WordCardSectionProps = {
  title: string
  items: StudyCardItem[]
  onBack: () => void
  onPractice?: () => void
  introBullets?: string[]
}

export function WordCardSection({
  title,
  items,
  onBack,
  onPractice,
  introBullets,
}: WordCardSectionProps) {
  return (
    <section className="pronoun-section">
      <SectionHeader title={title} onBack={onBack} onPractice={onPractice} />

      {introBullets && introBullets.length > 0 ? (
        <div className="sp-intro">
          <ul className="case-vowel-intro__list">
            {introBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ) : null}

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
