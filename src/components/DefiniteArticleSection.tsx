import {
  definiteArticleExamples,
  definiteArticleIntro,
  definiteArticlePronunciationRules,
  moonLetters,
  sunLetters,
} from '../data/definiteArticle'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { SectionHeader } from './SectionHeader'

type DefiniteArticleSectionProps = {
  onBack: () => void
  onPractice?: () => void
}

function PronunciationRuleCard({
  kind,
  rule,
}: {
  kind: 'sun' | 'moon'
  rule: (typeof definiteArticlePronunciationRules)['sun']
}) {
  return (
    <article className={`def-article-rule def-article-rule--${kind}`}>
      <h2 className="def-article-rule__title">{rule.title}</h2>
      <p className="def-article-rule__letters" dir="rtl" lang="ar">
        {rule.letters}
      </p>
      <ol className="def-article-rule__steps">
        {rule.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p className="def-article-rule__pattern">
        패턴: <strong>{rule.pattern}</strong>
      </p>
      <div className="def-article-rule__demo">
        <span className="def-article-rule__demo-label">{rule.compareLabel}</span>
        <span className="def-article-rule__demo-arabic" dir="rtl" lang="ar">
          {rule.compareArabic}
        </span>
        <span className="def-article-rule__demo-korean">{rule.compareWord}</span>
        <span className="def-article-rule__demo-pron">{rule.comparePron}</span>
      </div>
    </article>
  )
}

function PronunciationTable({
  title,
  items,
}: {
  title: string
  items: typeof definiteArticleExamples
}) {
  return (
    <div className="def-article-table-wrap">
      <h2 className="def-article-table-wrap__title">{title}</h2>
      <div className="def-article-table">
        <div className="def-article-table__row def-article-table__row--head">
          <span>뜻</span>
          <span>글자</span>
          <span>ال 붙이면</span>
          <span>발음</span>
          <span>읽는 법</span>
        </div>
        {items.map((item) => (
          <div key={item.id} className="def-article-table__row">
            <span className="def-article-table__korean">{item.nounKorean}</span>
            <span className="def-article-table__letter" dir="rtl" lang="ar">
              {item.letterArabic}
              <span className="def-article-table__letter-name">{item.letterKorean}</span>
            </span>
            <span className="def-article-table__arabic" dir="rtl" lang="ar">
              {item.withAlArabic}
            </span>
            <span className="def-article-table__pron">{item.pronunciation}</span>
            <span className="def-article-table__how">{item.readHow}</span>
            <ArabicSpeechButton
              text={item.withAlArabic}
              label={`${item.nounKorean} 정관사 듣기`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function DefiniteArticleSection({ onBack, onPractice }: DefiniteArticleSectionProps) {
  const sunExamples = definiteArticleExamples.filter((item) => item.letterClass === 'sun')
  const moonExamples = definiteArticleExamples.filter((item) => item.letterClass === 'moon')

  return (
    <section className="pronoun-section definite-article-section">
      <SectionHeader title={definiteArticleIntro.title} onBack={onBack} onPractice={onPractice} />

      <div className="def-article-intro">
        <p>
          <strong dir="rtl" lang="ar">
            ال
          </strong>
          (알)은 「그 ~」처럼 특정한 명사 앞에 붙입니다. 중요한 건{' '}
          <strong>다음 글자가 태양문자인지 달문자인지</strong>에 따라{' '}
          <strong>발음이 달라진다</strong>는 점입니다.
        </p>
      </div>

      <div className="def-article-rules-grid">
        <PronunciationRuleCard kind="sun" rule={definiteArticlePronunciationRules.sun} />
        <PronunciationRuleCard kind="moon" rule={definiteArticlePronunciationRules.moon} />
      </div>

      <div className="def-article-letter-lists">
        <div className="def-article-letter-list">
          <h3 className="def-article-letter-list__title">태양문자 14개</h3>
          <div className="def-article-letter-list__chips">
            {sunLetters.map((letter) => (
              <span key={letter.id} className="def-article-letter-list__chip" dir="rtl" lang="ar">
                {letter.letterArabic}
                <span>{letter.letterKorean}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="def-article-letter-list">
          <h3 className="def-article-letter-list__title">달문자 (나머지)</h3>
          <div className="def-article-letter-list__chips">
            {moonLetters.map((letter) => (
              <span key={letter.id} className="def-article-letter-list__chip" dir="rtl" lang="ar">
                {letter.letterArabic}
                <span>{letter.letterKorean}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <PronunciationTable title="태양문자 — 발음표" items={sunExamples} />
      <PronunciationTable title="달문자 — 발음표" items={moonExamples} />
    </section>
  )
}
