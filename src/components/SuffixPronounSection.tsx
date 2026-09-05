import { suffixPronouns } from '../data/suffixPronouns'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { SectionHeader } from './SectionHeader'

type SuffixPronounSectionProps = {
  onBack: () => void
  onPractice?: () => void
}

export function SuffixPronounSection({ onBack, onPractice }: SuffixPronounSectionProps) {
  const exampleRows = suffixPronouns.flatMap((item) =>
    item.examples.map((example, index) => ({
      id: `${item.id}-${index}`,
      personKorean: item.korean,
      personHint: item.hint,
      ...example,
    })),
  )

  return (
    <section className="pronoun-section suffix-pronoun-section">
      <SectionHeader title="접미 인칭대명사" onBack={onBack} onPractice={onPractice} />

      <div className="sp-intro">
        <p>
          명사 뒤에 붙는 소유 접미사입니다. 왼쪽은 문장 앞에 쓰는 <strong>독립형</strong>, 오른쪽은
          「책·커피」 뒤에 붙는 <strong>접미사</strong>입니다.
        </p>
      </div>

      <div className="sp-table-wrap">
        <h2 className="sp-table-wrap__title">한눈에 보기</h2>
        <div className="sp-table">
          <div className="sp-table__row sp-table__row--head sp-table__row--suffix-ref">
            <span>인칭</span>
            <span>독립형 · 발음</span>
            <span>접미사 · 발음</span>
          </div>
          {suffixPronouns.map((item) => (
            <div key={item.id} className="sp-table__row sp-table__row--suffix-ref">
              <span className="sp-table__korean">
                {item.korean}
                <span className="sp-table__hint">({item.hint})</span>
              </span>
              <span className="sp-table__word">
                <span className="sp-table__arabic" dir="rtl" lang="ar">
                  {item.standaloneArabic}
                </span>
                <span className="sp-table__pron">{item.standalonePronunciation}</span>
              </span>
              <span className="sp-table__word">
                <span className="sp-table__arabic" dir="rtl" lang="ar">
                  {item.suffixArabic}
                </span>
                <span className="sp-table__pron">{item.suffixPronunciation}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="sp-table-wrap">
        <h2 className="sp-table-wrap__title">예문</h2>
        <p className="sp-table-wrap__note">책(كِتَاب) · 커피(قَهْوَة)에 붙인 예입니다.</p>
        <div className="sp-table">
          <div className="sp-table__row sp-table__row--head sp-table__row--suffix-example">
            <span>인칭</span>
            <span>한국어</span>
            <span>아랍어 · 발음</span>
          </div>
          {exampleRows.map((row) => (
            <div key={row.id} className="sp-table__row sp-table__row--example sp-table__row--suffix-example">
              <span className="sp-table__label">
                {row.personKorean}
                <span className="sp-table__hint">({row.personHint})</span>
              </span>
              <span className="sp-table__korean">
                {row.korean}
                <span className="sp-table__hint">({row.hint})</span>
              </span>
              <span className="sp-table__word">
                <span className="sp-table__arabic" dir="rtl" lang="ar">
                  {row.arabic}
                </span>
                <span className="sp-table__pron">{row.pronunciation}</span>
              </span>
              <ArabicSpeechButton text={row.arabic} label={`${row.korean} 아랍어 듣기`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
