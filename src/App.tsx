import { useState } from 'react'
import { getStudyLanguage, type StudyLanguageId } from './lib/studyLanguages'
import { EmptyLanguagePage } from './pages/EmptyLanguagePage'
import { LanguageHomePage } from './pages/LanguageHomePage'
import { StudyPage } from './pages/StudyPage'

export default function App() {
  const [languageId, setLanguageId] = useState<StudyLanguageId | null>(null)

  if (languageId === null) {
    return <LanguageHomePage onSelect={setLanguageId} />
  }

  if (languageId === 'ar') {
    return <StudyPage onExitToLanguages={() => setLanguageId(null)} />
  }

  const language = getStudyLanguage(languageId)
  if (!language) {
    return <LanguageHomePage onSelect={setLanguageId} />
  }

  return <EmptyLanguagePage language={language} onBack={() => setLanguageId(null)} />
}
