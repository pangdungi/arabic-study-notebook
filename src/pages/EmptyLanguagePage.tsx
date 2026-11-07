import type { StudyLanguage } from '../lib/studyLanguages'

type EmptyLanguagePageProps = {
  language: StudyLanguage
  onBack: () => void
}

export function EmptyLanguagePage({ language, onBack }: EmptyLanguagePageProps) {
  return (
    <main className="study-page language-shell">
      <header className="language-shell__header">
        <button type="button" className="study-nav-btn" onClick={onBack}>
          언어 선택
        </button>
        <h1 className="language-shell__title">{language.title}</h1>
        <p className="language-shell__sub">{language.subtitle}</p>
      </header>

      <div className="language-empty">
        <p className="language-empty__text">아직 정리된 학습 내용이 없습니다.</p>
        <p className="language-empty__hint">덱을 추가하면 이 화면에 메뉴가 나타납니다.</p>
      </div>
    </main>
  )
}
