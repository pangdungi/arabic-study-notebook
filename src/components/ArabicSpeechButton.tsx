import { speakArabic } from '../lib/speakArabic'

type ArabicSpeechButtonProps = {
  text: string
  label: string
}

export function ArabicSpeechButton({ text, label }: ArabicSpeechButtonProps) {
  return (
    <button
      type="button"
      className="speech-btn"
      aria-label={label}
      title={label}
      onClick={(event) => {
        event.stopPropagation()
        speakArabic(text)
      }}
    >
      <svg
        className="speech-btn__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M3 10v4c0 1.1.9 2 2 2h3l4 3V5L8 8H5c-1.1 0-2 .9-2 2z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
        <path d="M17.8 6.2a8.5 8.5 0 0 1 0 11.6" />
      </svg>
    </button>
  )
}
