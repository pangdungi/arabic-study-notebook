import { useEffect } from 'react'
import type { VerbItem } from '../data/verbs'
import { ArabicSpeechButton } from './ArabicSpeechButton'

type VerbConjugationModalProps = {
  verb: VerbItem
  onClose: () => void
}

export function VerbConjugationModal({ verb, onClose }: VerbConjugationModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="verb-modal" role="presentation" onClick={onClose}>
      <div
        className="verb-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="verb-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="verb-modal__header">
          <div>
            <h2 id="verb-modal-title" className="verb-modal__title">
              {verb.pastEnglish} · {verb.pastKorean}
            </h2>
            <p className="verb-modal__subtitle">대명사별 과거 · 현재 변화</p>
          </div>
          <button type="button" className="verb-modal__close" onClick={onClose}>
            닫기
          </button>
        </header>

        <div className="verb-modal__table-wrap">
          <table className="verb-modal__table">
            <thead>
              <tr>
                <th scope="col">대명사</th>
                <th scope="col">과거</th>
                <th scope="col">현재</th>
              </tr>
            </thead>
            <tbody>
              {verb.rows.map((row) => (
                <tr key={row.id}>
                  <th scope="row" className="verb-modal__person">
                    <span className="verb-modal__person-label">{row.label}</span>
                    <span className="verb-modal__person-hint">({row.hint})</span>
                  </th>
                  <td className="verb-modal__cell">
                    <div className="verb-modal__form">
                      <span className="verb-modal__arabic" dir="rtl" lang="ar">
                        {row.past.arabic}
                      </span>
                      <span className="verb-modal__pron">{row.past.pronunciation}</span>
                      <ArabicSpeechButton
                        text={row.past.arabic}
                        label={`${row.label} 과거 ${verb.pastKorean} 듣기`}
                      />
                    </div>
                  </td>
                  <td className="verb-modal__cell">
                    <div className="verb-modal__form">
                      <span className="verb-modal__arabic" dir="rtl" lang="ar">
                        {row.present.arabic}
                      </span>
                      <span className="verb-modal__pron">{row.present.pronunciation}</span>
                      <ArabicSpeechButton
                        text={row.present.arabic}
                        label={`${row.label} 현재 ${verb.pastKorean} 듣기`}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
