import type { NounToAdverbItem } from '../data/nounToAdverb'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'

type NounToAdverbSectionProps = {
  onBack: () => void
  items: NounToAdverbItem[]
}

export function NounToAdverbSection({ onBack, items }: NounToAdverbSectionProps) {
  return (
    <section className="pronoun-section">
      <header className="pronoun-section__header">
        <button type="button" className="study-nav-btn" onClick={onBack}>
          뒤로
        </button>
        <h1 className="pronoun-section__title">명사 → 부사</h1>
      </header>

      <p className="noun-adverb-note">
        끝에 ً(탄윈 팟하)를 붙이면 명사가 시간 부사가 됩니다. morning → in the morning
        같은 느낌이에요.
      </p>

      <ul className="pronoun-list noun-adverb-list">
        {items.map((item) => (
          <li key={item.id} className="study-card">
            <FlipCard
              ariaLabel={`${item.nounKorean}에서 ${item.adverbKorean}`}
              front={
                <>
                  <span className="noun-adverb-card__label">명사</span>
                  <span className="pronoun-card__korean">{item.nounKorean}</span>
                  <span className="pronoun-card__hint">({item.hint.split(' → ')[0]})</span>
                  <span className="noun-adverb-card__arabic" dir="rtl" lang="ar">
                    {item.nounArabic}
                  </span>
                  <span className="noun-adverb-card__pronunciation">{item.nounPronunciation}</span>
                </>
              }
              back={
                <>
                  <span className="noun-adverb-card__label">부사</span>
                  <span className="pronoun-card__korean">{item.adverbKorean}</span>
                  <span className="pronoun-card__hint">({item.hint.split(' → ')[1]})</span>
                  <span className="pronoun-card__arabic" dir="rtl" lang="ar">
                    {item.adverbArabic}
                  </span>
                  <span className="pronoun-card__pronunciation">{item.adverbPronunciation}</span>
                </>
              }
            />
            <ArabicSpeechButton
              text={item.adverbArabic}
              label={`${item.adverbKorean} 아랍어 듣기`}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
