import { singularPluralGroups, singularPluralIntro, singularPluralOverview } from '../data/singularPlural'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { SectionHeader } from './SectionHeader'

type SingularPluralSectionProps = {
  onBack: () => void
  onPractice?: () => void
}

function speechText(arabic: string): string {
  return arabic.includes('→') ? arabic.split('→')[1]?.trim() ?? arabic : arabic
}

export function SingularPluralSection({ onBack, onPractice }: SingularPluralSectionProps) {
  return (
    <section className="pronoun-section singular-plural-section">
      <SectionHeader title={singularPluralIntro.title} onBack={onBack} onPractice={onPractice} />

      <div className="sp-intro">
        <p>{singularPluralIntro.summary}</p>
      </div>

      <div className="sp-table-wrap">
        <h2 className="sp-table-wrap__title">한눈에 보기</h2>
        <div className="sp-table">
          <div className="sp-table__row sp-table__row--head">
            <span>구분</span>
            <span>개수</span>
            <span>붙이는 것</span>
            <span>예 · 아랍어 · 발음</span>
          </div>
          {singularPluralOverview.map((row) => (
            <div key={row.id} className="sp-table__row">
              <span className="sp-table__label">{row.label}</span>
              <span>{row.countKorean}</span>
              <span>{row.suffixKorean}</span>
              <span className="sp-table__word">
                <span className="sp-table__arabic" dir="rtl" lang="ar">
                  {row.exampleArabic}
                </span>
                <span className="sp-table__pron">{row.examplePron}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {singularPluralGroups.map((group) => (
        <div key={group.id} className="sp-table-wrap">
          <h2 className="sp-table-wrap__title">{group.title}</h2>
          <p className="sp-table-wrap__lead">
            {group.roleKorean} · 붙이는 것: {group.suffixKorean}
          </p>
          {group.suffixMarks !== '—' ? (
            <p className="sp-table-wrap__marks" dir="rtl" lang="ar">
              {group.suffixMarks}
            </p>
          ) : null}
          <p className="sp-table-wrap__note">
            {group.note}
            {group.noteExample ? (
              <>
                {' '}
                예:{' '}
                <span className="sp-table-wrap__note-example">
                  <span className="sp-table-wrap__note-pair">
                    <span className="sp-table__arabic" dir="rtl" lang="ar">
                      {group.noteExample.fromArabic}
                    </span>
                    <span className="sp-table__pron">{group.noteExample.fromPronunciation}</span>
                  </span>
                  <span className="sp-table-wrap__note-arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="sp-table-wrap__note-pair">
                    <span className="sp-table__arabic" dir="rtl" lang="ar">
                      {group.noteExample.toArabic}
                    </span>
                    <span className="sp-table__pron">{group.noteExample.toPronunciation}</span>
                  </span>
                </span>
              </>
            ) : null}
          </p>

          <div className="sp-table">
            <div className="sp-table__row sp-table__row--head">
              <span>한국어</span>
              <span>아랍어 · 발음</span>
            </div>
            {group.items.map((item) => (
              <div key={item.id} className="sp-table__row sp-table__row--example">
                <span className="sp-table__korean">
                  {item.korean}
                  {item.hint ? (
                    <span className="sp-table__hint">({item.hint})</span>
                  ) : null}
                </span>
                <span className="sp-table__word">
                  <span className="sp-table__arabic" dir="rtl" lang="ar">
                    {item.arabic}
                  </span>
                  <span className="sp-table__pron">{item.pronunciation}</span>
                </span>
                <ArabicSpeechButton
                  text={speechText(item.arabic)}
                  label={`${item.korean} 아랍어 듣기`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
