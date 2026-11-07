export type StudyLanguageId = 'en' | 'ja' | 'ar'

export type StudyLanguage = {
  id: StudyLanguageId
  title: string
  subtitle: string
}

export const studyLanguages: StudyLanguage[] = [
  { id: 'en', title: 'English', subtitle: '영어' },
  { id: 'ja', title: '日本語', subtitle: '일본어' },
  { id: 'ar', title: '아랍어', subtitle: 'العربية' },
]

export function getStudyLanguage(id: StudyLanguageId): StudyLanguage | undefined {
  return studyLanguages.find((language) => language.id === id)
}
