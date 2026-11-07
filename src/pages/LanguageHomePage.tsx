import { studyLanguages, type StudyLanguageId } from '../lib/studyLanguages'

type LanguageHomePageProps = {
  onSelect: (id: StudyLanguageId) => void
}

export function LanguageHomePage({ onSelect }: LanguageHomePageProps) {
  return (
    <main className="study-page language-home">
      <header className="language-home__header">
        <h1 className="language-home__title">언어 공부장</h1>
        <p className="language-home__lead">공부할 언어를 선택하세요.</p>
      </header>

      <div className="language-home__nav" role="list">
        {studyLanguages.map((language) => (
          <button
            key={language.id}
            type="button"
            className="language-home__btn"
            role="listitem"
            onClick={() => onSelect(language.id)}
          >
            <span className="language-home__btn-title">{language.title}</span>
            <span className="language-home__btn-sub">{language.subtitle}</span>
          </button>
        ))}
      </div>
    </main>
  )
}
