import { useEffect } from 'react'
import type { FutureVerbItem } from '../data/futureTense'
import { ArabicSpeechButton } from './ArabicSpeechButton'

type FutureConjugationModalProps = {
  verb: FutureVerbItem
  onClose: () => void
}

export function FutureConjugationModal({ verb, onClose }: FutureConjugationModalProps) {
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
        aria-labelledby="future-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="verb-modal__header">
          <div>
            <h2 id="future-modal-title" className="verb-modal__title">
              {verb.futureEnglish} · {verb.futureKorean}
            </h2>
            <p className="verb-modal__subtitle">대명사별 미래시제</p>
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
                <th scope="col">미래</th>
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
                        {row.future.arabic}
                      </span>
                      <span className="verb-modal__pron">{row.future.pronunciation}</span>
                      <ArabicSpeechButton
                        text={row.future.arabic}
                        label={`${row.label} 미래 ${verb.futureKorean} 듣기`}
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
