type StudySubMenuProps = {
  title: string
  items: Array<{
    id: string
    label: string
    onClick: () => void
  }>
  onBack: () => void
}

export function StudySubMenu({ title, items, onBack }: StudySubMenuProps) {
  return (
    <section className="study-submenu">
      <header className="study-submenu__header">
        <button type="button" className="study-nav-btn" onClick={onBack}>
          뒤로
        </button>
        <h1 className="study-submenu__title">{title}</h1>
      </header>

      <div className="study-nav">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className="study-nav-btn"
            onClick={item.onClick}
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  )
}
