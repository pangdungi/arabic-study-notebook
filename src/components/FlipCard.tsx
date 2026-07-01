import { useState } from 'react'

type FlipCardProps = {
  front: React.ReactNode
  back: React.ReactNode
  ariaLabel: string
}

export function FlipCard({ front, back, ariaLabel }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      className={`flip-card${flipped ? ' flip-card--flipped' : ''}`}
      aria-label={ariaLabel}
      aria-pressed={flipped}
      onClick={() => setFlipped((prev) => !prev)}
    >
      <span className="flip-card__inner">
        <span className="flip-card__face flip-card__face--front">{front}</span>
        <span className="flip-card__face flip-card__face--back">{back}</span>
      </span>
    </button>
  )
}
