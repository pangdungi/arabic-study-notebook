import { singularPluralGroups, singularPluralIntro } from '../data/singularPlural'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'

type SingularPluralSectionProps = {
  onBack: () => void
}

export function SingularPluralSection({ onBack }: SingularPluralSectionProps) {
  return (
    <section className="pronoun-section case-vowel-section">
      <header className="pronoun-section__header">
        <button type="button" className="study-nav-btn" onClick={onBack}>
          뒤로
        </button>
        <h1 className="pronoun-section__title">{singularPluralIntro.title}</h1>
      </header>

      <div className="case-vowel-intro">
        <p className="case-vowel-intro__summary">{singularPluralIntro.summary}</p>
        <ul className="case-vowel-intro__list">
          {singularPluralIntro.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <div className="case-vowel-table singular-plural-table" dir="rtl" lang="ar">
          <div className="case-vowel-table__row case-vowel-table__row--head singular-plural-table__row">
            <span>كِتَاب</span>
            <span>كِتَابَانِ</span>
            <span>مُعَلِّمُونَ</span>
            <span>مُعَلِّمَات</span>
          </div>
          <div className="case-vowel-table__row case-vowel-table__row--labels singular-plural-table__row">
            <span>단수</span>
            <span>쌍수</span>
            <span>남성 규칙복수</span>
            <span>여성 규칙복수</span>
          </div>
        </div>
      </div>

      {singularPluralGroups.map((group) => (
        <div key={group.id} className="case-vowel-group">
          <div className="case-vowel-pattern">
            <div className="case-vowel-pattern__header">
              <p className="case-vowel-pattern__title">{group.title}</p>
              <p className="case-vowel-pattern__marks" dir="rtl" lang="ar">
                {group.suffixMarks}
              </p>
            </div>
            <p className="case-vowel-pattern__term" dir="rtl" lang="ar">
              {group.arabicTerm}
            </p>
            <p className="case-vowel-pattern__meta">
              {group.suffixKorean} · {group.roleKorean}
            </p>
            <p className="case-vowel-pattern__note">{group.note}</p>
          </div>

          <ul className="pronoun-list">
            {group.items.map((item) => (
              <li key={item.id} className="study-card">
                <FlipCard
                  ariaLabel={item.korean}
                  front={
                    <>
                      <span className="case-vowel-card__label">{group.title}</span>
                      <span className="pronoun-card__korean">{item.korean}</span>
                      <span className="pronoun-card__hint">({item.hint})</span>
                    </>
                  }
                  back={
                    <>
                      <span className="case-vowel-card__label">아랍어</span>
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
        </div>
      ))}
    </section>
  )
}
