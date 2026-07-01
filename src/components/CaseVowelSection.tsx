import { caseVowelGroups, caseVowelIntro } from '../data/caseVowels'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'

type CaseVowelSectionProps = {
  onBack: () => void
}

export function CaseVowelSection({ onBack }: CaseVowelSectionProps) {
  return (
    <section className="pronoun-section case-vowel-section">
      <header className="pronoun-section__header">
        <button type="button" className="study-nav-btn" onClick={onBack}>
          뒤로
        </button>
        <h1 className="pronoun-section__title">{caseVowelIntro.title}</h1>
      </header>

      <div className="case-vowel-intro">
        <p className="case-vowel-intro__summary">{caseVowelIntro.summary}</p>
        <ul className="case-vowel-intro__list">
          {caseVowelIntro.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <div className="case-vowel-table" dir="rtl" lang="ar">
          <div className="case-vowel-table__row case-vowel-table__row--head">
            <span>الْكِتَابُ</span>
            <span>الْكِتَابَ</span>
            <span>الْكِتَابِ</span>
          </div>
          <div className="case-vowel-table__row case-vowel-table__row--labels">
            <span>주격 u</span>
            <span>목적격 a</span>
            <span>소유격 i</span>
          </div>
        </div>
      </div>

      {caseVowelGroups.map((group) => (
        <div key={group.id} className="case-vowel-group">
          <div className="case-vowel-pattern">
            <div className="case-vowel-pattern__header">
              <p className="case-vowel-pattern__title">{group.title}</p>
              <p className="case-vowel-pattern__marks" dir="rtl" lang="ar">
                {group.vowelMarks}
              </p>
            </div>
            <p className="case-vowel-pattern__term" dir="rtl" lang="ar">
              {group.arabicTerm}
            </p>
            <p className="case-vowel-pattern__meta">
              {group.vowelKorean} · {group.roleKorean}
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
