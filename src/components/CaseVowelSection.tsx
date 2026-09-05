import {
  caseVowelEndingGuide,
  caseVowelIntro,
  caseVowelNounSets,
  caseVowelSentenceExamples,
} from '../data/caseVowels'
import { ArabicSpeechButton } from './ArabicSpeechButton'
import { FlipCard } from './FlipCard'
import { SectionHeader } from './SectionHeader'

type CaseVowelSectionProps = {
  onBack: () => void
  onPractice?: () => void
}

export function CaseVowelSection({ onBack, onPractice }: CaseVowelSectionProps) {
  const defBook = caseVowelNounSets.find((set) => set.id === 'book-def')

  return (
    <section className="pronoun-section case-vowel-section">
      <SectionHeader title={caseVowelIntro.title} onBack={onBack} onPractice={onPractice} />

      <div className="case-vowel-intro">
        <p className="case-vowel-intro__summary">
          아랍어 명사는 문장 안 역할에 따라 <strong>끝에 붙는 모음</strong>이 바뀝니다. 같은
          「책」이라도 주어·목적어·소유/전치사 뒤에 따라{' '}
          <strong>책(이) → 책을 → 책의</strong>처럼 격이 달라집니다.
        </p>

        <div className="case-vowel-guide">
          <p className="case-vowel-guide__title">격마다 붙는 끝모음</p>
          <div className="case-vowel-guide__table">
            <div className="case-vowel-guide__row case-vowel-guide__row--head">
              <span>격</span>
              <span>한국어</span>
              <span>끝모음 · 발음</span>
              <span>탄윈 · 발음</span>
              <span>예(한정) · 발음</span>
            </div>
            {caseVowelEndingGuide.map((row) => (
              <div key={row.caseId} className="case-vowel-guide__row">
                <span className="case-vowel-guide__case">{row.caseLabel}</span>
                <span>
                  <strong>{row.koreanSample}</strong>
                  <span className="case-vowel-guide__role">{row.roleKorean}</span>
                </span>
                <span>
                  <span className="case-vowel-guide__mark-pron">{row.endingKorean}</span>
                  <span className="case-vowel-guide__mark-arabic" dir="rtl" lang="ar">
                    {row.endingMark}
                  </span>
                </span>
                <span>
                  <span className="case-vowel-guide__mark-pron">{row.tanwinKorean}</span>
                  <span className="case-vowel-guide__mark-arabic" dir="rtl" lang="ar">
                    {row.tanwinMark}
                  </span>
                </span>
                <span>
                  <span className="case-vowel-guide__mark-arabic" dir="rtl" lang="ar">
                    {row.exampleDefArabic}
                  </span>
                  <span className="case-vowel-guide__mark-pron">{row.exampleDefPron}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {defBook ? (
          <div className="case-vowel-table">
            <p className="case-vowel-table__caption">예: 한정 명사 「책」 — 격만 바뀜</p>
            <div className="case-vowel-table__row case-vowel-table__row--head" dir="rtl" lang="ar">
              {defBook.forms.map((form) => (
                <span key={form.id}>{form.arabic}</span>
              ))}
            </div>
            <div className="case-vowel-table__row case-vowel-table__row--labels">
              {defBook.forms.map((form) => (
                <span key={form.id}>
                  {form.korean} · {form.endingKorean}
                </span>
              ))}
            </div>
            <div className="case-vowel-table__row case-vowel-table__row--pron">
              {defBook.forms.map((form) => (
                <span key={form.id}>{form.pronunciation}</span>
              ))}
            </div>
          </div>
        ) : null}

        <p className="case-vowel-intro__note">
          비한정 명사(
          <span dir="rtl" lang="ar">
            ال
          </span>{' '}
          없음 · 알 없음)는 끝에 <strong>탄윈</strong>(운 · 안 · 인)이 붙습니다. 예:{' '}
          <span dir="rtl" lang="ar">
            كِتَابٌ
          </span>{' '}
          키탑분,{' '}
          <span dir="rtl" lang="ar">
            كِتَابًا
          </span>{' '}
          키탑반,{' '}
          <span dir="rtl" lang="ar">
            كِتَابٍ
          </span>{' '}
          키탑빈.{' '}
          <span dir="rtl" lang="ar">
            ال
          </span>
          (알) 정관사가 붙으면 탄윈은 빠지고 <strong>단모음</strong>(우 · 아 · 이)만
          남습니다. 예:{' '}
          <span dir="rtl" lang="ar">
            الْكِتَابُ
          </span>{' '}
          알키탑부,{' '}
          <span dir="rtl" lang="ar">
            الْكِتَابَ
          </span>{' '}
          알키탑바,{' '}
          <span dir="rtl" lang="ar">
            الْكِتَابِ
          </span>{' '}
          알키탑비.
        </p>
      </div>

      <h2 className="case-vowel-section__heading">같은 명사, 격만 바꾸기</h2>
      <p className="case-vowel-section__lead">
        아래에서 <strong>책(이) · 책을 · 책의</strong>처럼 같은 단어가 격에 따라 어떻게
        바뀌는지 한눈에 비교해 보세요. 모든 아랍어 옆에 한글 발음이 있습니다.
      </p>

      {caseVowelNounSets.map((set) => (
        <div key={set.id} className="case-vowel-set">
          <div className="case-vowel-set__header">
            <h3 className="case-vowel-set__title">{set.nounKorean}</h3>
            <span className="case-vowel-set__badge">
              {set.definiteLabel}
              {set.definiteLabel.includes('ال') ? ' · 알' : ''}
            </span>
          </div>

          <div className="case-vowel-triplet">
            {set.forms.map((form) => (
              <article key={form.id} className="case-vowel-triplet__cell">
                <p className="case-vowel-triplet__case">{form.caseLabel}</p>
                <p className="case-vowel-triplet__korean">{form.korean}</p>
                <p className="case-vowel-triplet__role">{form.roleKorean}</p>
                <p className="case-vowel-triplet__ending">
                  <span className="case-vowel-triplet__ending-label">{form.endingKorean}</span>
                  <span className="case-vowel-triplet__ending-mark" dir="rtl" lang="ar">
                    {form.endingMark}
                  </span>
                </p>
                <p className="case-vowel-triplet__arabic" dir="rtl" lang="ar">
                  {form.arabic}
                </p>
                <p className="case-vowel-triplet__pron">{form.pronunciation}</p>
                <ArabicSpeechButton text={form.arabic} label={`${form.korean} 아랍어 듣기`} />
              </article>
            ))}
          </div>
        </div>
      ))}

      <h2 className="case-vowel-section__heading">문장 예시</h2>
      <p className="case-vowel-section__lead">
        실제 문장에서 어떤 격이 쓰이는지 확인해 보세요.
      </p>

      <ul className="pronoun-list">
        {caseVowelSentenceExamples.map((item) => (
          <li key={item.id} className="study-card">
            <FlipCard
              ariaLabel={item.korean}
              front={
                <>
                  <span className="case-vowel-card__label">{item.caseLabel}</span>
                  <span className="pronoun-card__korean">{item.korean}</span>
                  <span className="pronoun-card__hint">{item.note}</span>
                </>
              }
              back={
                <>
                  <span className="case-vowel-card__label">아랍어 · 발음</span>
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
