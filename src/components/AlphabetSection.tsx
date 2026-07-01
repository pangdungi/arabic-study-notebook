import { arabicAlphabet } from '../data/arabicAlphabet'
import { ArabicSpeechButton } from './ArabicSpeechButton'

type AlphabetSectionProps = {
  onBack: () => void
}

const formLabels = [
  { key: 'isolated' as const, label: '독립' },
  { key: 'initial' as const, label: '처음' },
  { key: 'medial' as const, label: '중간' },
  { key: 'final' as const, label: '끝' },
]

export function AlphabetSection({ onBack }: AlphabetSectionProps) {
  return (
    <section className="pronoun-section alphabet-section">
      <header className="pronoun-section__header">
        <button type="button" className="study-nav-btn" onClick={onBack}>
          뒤로
        </button>
        <h1 className="pronoun-section__title">아랍어 알파벳</h1>
      </header>

      <div className="alphabet-note">
        <p>
          아랍어는 <strong>오른쪽에서 왼쪽</strong>으로 쓰고, 글자가 이어질 때{' '}
          <strong>처음·중간·끝</strong> 모양이 달라집니다.
        </p>
        <p>
          <strong>ا د ذ ر ز و</strong> 6글자는 뒤 글자와 연결하지 않아 중간 형태가
          없습니다.
        </p>
      </div>

      <ul className="pronoun-list alphabet-list">
        {arabicAlphabet.map((letter) => (
          <li key={letter.id} className="alphabet-card study-card">
            <div className="alphabet-card__header">
              <div className="alphabet-card__names">
                <p className="alphabet-card__korean">{letter.nameKorean}</p>
                <p className="alphabet-card__meta">
                  {letter.nameEnglish} · {letter.pronunciation}
                </p>
              </div>
              <span className="alphabet-card__isolated" dir="rtl" lang="ar">
                {letter.forms.isolated}
              </span>
            </div>

            {!letter.connectsToNext ? (
              <p className="alphabet-card__badge">뒤 글자와 연결 안 함</p>
            ) : null}

            <div className="alphabet-forms" dir="rtl" lang="ar">
              {formLabels.map(({ key, label }) => {
                const value = letter.forms[key]

                return (
                  <div key={key} className="alphabet-forms__cell">
                    <span className="alphabet-forms__label">{label}</span>
                    <span
                      className={`alphabet-forms__glyph${
                        value ? '' : ' alphabet-forms__glyph--empty'
                      }`}
                    >
                      {value ?? '—'}
                    </span>
                  </div>
                )
              })}
            </div>

            <ArabicSpeechButton
              text={letter.forms.isolated}
              label={`${letter.nameKorean}(${letter.pronunciation}) 발음 듣기`}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
