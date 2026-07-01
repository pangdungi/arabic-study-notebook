import { useState } from 'react'
import { suffixPronouns } from '../data/suffixPronouns'
import { ArabicSpeechButton } from './ArabicSpeechButton'

type SuffixPronounSectionProps = {
  onBack: () => void
}

export function SuffixPronounSection({ onBack }: SuffixPronounSectionProps) {
  const [selectedId, setSelectedId] = useState(suffixPronouns[0]?.id ?? '')
  const selected =
    suffixPronouns.find((item) => item.id === selectedId) ?? suffixPronouns[0]

  if (!selected) return null

  return (
    <section className="suffix-pronoun-section">
      <header className="pronoun-section__header">
        <button type="button" className="study-nav-btn" onClick={onBack}>
          뒤로
        </button>
        <h1 className="pronoun-section__title">접미 인칭대명사</h1>
      </header>

      <p className="suffix-pronoun-note">
        인칭대명사를 고르면 명사 뒤에 붙는 <strong>접미사</strong>와 예문(책·커피)이
        연결돼 보여요.
      </p>

      <div className="suffix-pronoun-picker">
        {suffixPronouns.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`suffix-pronoun-picker__btn${
              item.id === selected.id ? ' suffix-pronoun-picker__btn--active' : ''
            }`}
            onClick={() => setSelectedId(item.id)}
          >
            <span className="suffix-pronoun-picker__label">{item.korean}</span>
            <span className="suffix-pronoun-picker__hint">({item.hint})</span>
            <span className="suffix-pronoun-picker__standalone">
              {item.standalonePronunciation}
            </span>
          </button>
        ))}
      </div>

      <div className="suffix-pronoun-panel">
        <div className="suffix-pronoun-panel__suffix">
          <p className="suffix-pronoun-panel__heading">접미사</p>
          <p className="suffix-pronoun-panel__standalone" dir="rtl" lang="ar">
            {selected.standaloneArabic}
          </p>
          <p className="suffix-pronoun-panel__standalone-pron">
            {selected.standalonePronunciation}
          </p>
          <p className="suffix-pronoun-panel__arrow">↓ 명사 뒤에</p>
          <p className="suffix-pronoun-panel__suffix-arabic" dir="rtl" lang="ar">
            {selected.suffixArabic}
          </p>
          <p className="suffix-pronoun-panel__suffix-pron">{selected.suffixPronunciation}</p>
        </div>

        <div className="suffix-pronoun-panel__examples">
          <p className="suffix-pronoun-panel__heading">예문</p>
          <ul className="suffix-pronoun-examples">
            {selected.examples.map((example) => (
              <li key={example.korean} className="suffix-pronoun-example study-card">
                <div className="suffix-pronoun-example__text">
                  <p className="suffix-pronoun-example__korean">{example.korean}</p>
                  <p className="suffix-pronoun-example__hint">({example.hint})</p>
                  <p className="suffix-pronoun-example__arabic" dir="rtl" lang="ar">
                    {example.arabic}
                  </p>
                  <p className="suffix-pronoun-example__pron">{example.pronunciation}</p>
                </div>
                <ArabicSpeechButton
                  text={example.arabic}
                  label={`${example.korean} 아랍어 듣기`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
