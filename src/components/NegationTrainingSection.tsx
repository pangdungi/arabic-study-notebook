import type { NegationCategory } from '../data/negation'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'

type NegationTrainingSectionProps = {
  category: NegationCategory
  onBack: () => void
}

export function NegationTrainingSection({ category, onBack }: NegationTrainingSectionProps) {
  return (
    <section className="pronoun-section negation-section">
      <header className="pronoun-section__header">
        <button type="button" className="study-nav-btn" onClick={onBack}>
          뒤로
        </button>
        <h1 className="pronoun-section__title">{category.title}</h1>
      </header>

      <div className="negation-pattern">
        <div className="negation-particle">
          <p className="negation-pattern__label">부정 표현</p>
          <p className="negation-particle__arabic" dir="rtl" lang="ar">
            {category.particleArabic}
          </p>
          <p className="negation-particle__pron">{category.particlePronunciation}</p>
        </div>
        <p className="negation-pattern__label">패턴</p>
        <p className="negation-pattern__formula" dir="rtl" lang="ar">
          {category.pattern}
        </p>
        <p className="negation-pattern__note">{category.note}</p>
      </div>

      <p className="negation-drill-note">카드를 눌러 아랍어 부정문을 확인해 보세요.</p>

      <ul className="pronoun-list">
        {category.items.map((item) => (
          <li key={item.id} className="study-card">
            <FlipCard
              ariaLabel={item.korean}
              front={
                <>
                  <span className="negation-card__label">한국어</span>
                  <span className="pronoun-card__korean">{item.korean}</span>
                  <span className="pronoun-card__hint">({item.hint})</span>
                </>
              }
              back={
                <>
                  <span className="negation-card__label">아랍어</span>
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
