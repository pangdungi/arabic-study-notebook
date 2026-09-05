type SectionHeaderProps = {
  title: string
  onBack: () => void
  onPractice?: () => void
}

export function SectionHeader({ title, onBack, onPractice }: SectionHeaderProps) {
  return (
    <header className="pronoun-section__header pronoun-section__header--with-actions">
      <button type="button" className="study-nav-btn" onClick={onBack}>
        뒤로
      </button>
      <h1 className="pronoun-section__title">{title}</h1>
      {onPractice ? (
        <button type="button" className="study-nav-btn study-nav-btn--practice" onClick={onPractice}>
          연습하기
        </button>
      ) : null}
    </header>
  )
}
