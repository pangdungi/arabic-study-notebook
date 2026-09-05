export type CaseId = 'marfu' | 'mansub' | 'majrur'

export type CaseVowelForm = {
  id: string
  caseId: CaseId
  caseLabel: string
  korean: string
  roleKorean: string
  endingMark: string
  endingKorean: string
  arabic: string
  pronunciation: string
}

export type CaseVowelNounSet = {
  id: string
  nounKorean: string
  nounHint: string
  definiteLabel: string
  forms: CaseVowelForm[]
}

export type CaseVowelSentenceExample = {
  id: string
  korean: string
  hint: string
  arabic: string
  pronunciation: string
  caseLabel: string
  note: string
}

/** @deprecated 검색 호환용 — flat 목록 */
export type CaseVowelDrillItem = {
  id: string
  korean: string
  hint: string
  arabic: string
  pronunciation: string
}

export const caseVowelIntro = {
  title: '격모음',
}

export const caseVowelEndingGuide = [
  {
    caseId: 'marfu' as const,
    caseLabel: '주격',
    koreanSample: '책(이)',
    roleKorean: '~이/가',
    endingMark: 'ـُ',
    endingKorean: '우',
    tanwinMark: 'ـٌ',
    tanwinKorean: '탄윈(운)',
    exampleDefArabic: 'الْكِتَابُ',
    exampleDefPron: '알키탑부',
    exampleIndefArabic: 'كِتَابٌ',
    exampleIndefPron: '키탑분',
  },
  {
    caseId: 'mansub' as const,
    caseLabel: '목적격',
    koreanSample: '책을',
    roleKorean: '~을/를',
    endingMark: 'ـَ',
    endingKorean: '아',
    tanwinMark: 'ـً',
    tanwinKorean: '탄윈(안)',
    exampleDefArabic: 'الْكِتَابَ',
    exampleDefPron: '알키탑바',
    exampleIndefArabic: 'كِتَابًا',
    exampleIndefPron: '키탑반',
  },
  {
    caseId: 'majrur' as const,
    caseLabel: '소유·전치사격',
    koreanSample: '책의',
    roleKorean: '~의 / ~에',
    endingMark: 'ـِ',
    endingKorean: '이',
    tanwinMark: 'ـٍ',
    tanwinKorean: '탄윈(인)',
    exampleDefArabic: 'الْكِتَابِ',
    exampleDefPron: '알키탑비',
    exampleIndefArabic: 'كِتَابٍ',
    exampleIndefPron: '키탑빈',
  },
]

export const caseVowelNounSets: CaseVowelNounSet[] = [
  {
    id: 'book-def',
    nounKorean: '책',
    nounHint: 'book',
    definiteLabel: '한정 (ال)',
    forms: [
      {
        id: 'book-def-marfu',
        caseId: 'marfu',
        caseLabel: '주격',
        korean: '책(이)',
        roleKorean: '~이/가',
        endingMark: 'ـُ',
        endingKorean: '우',
        arabic: 'الْكِتَابُ',
        pronunciation: '알키탑부',
      },
      {
        id: 'book-def-mansub',
        caseId: 'mansub',
        caseLabel: '목적격',
        korean: '책을',
        roleKorean: '~을/를',
        endingMark: 'ـَ',
        endingKorean: '아',
        arabic: 'الْكِتَابَ',
        pronunciation: '알키탑바',
      },
      {
        id: 'book-def-majrur',
        caseId: 'majrur',
        caseLabel: '소유·전치사격',
        korean: '책의',
        roleKorean: '~의',
        endingMark: 'ـِ',
        endingKorean: '이',
        arabic: 'الْكِتَابِ',
        pronunciation: '알키탑비',
      },
    ],
  },
  {
    id: 'book-indef',
    nounKorean: '책',
    nounHint: 'book',
    definiteLabel: '비한정',
    forms: [
      {
        id: 'book-indef-marfu',
        caseId: 'marfu',
        caseLabel: '주격',
        korean: '책(이)',
        roleKorean: '~이/가',
        endingMark: 'ـٌ',
        endingKorean: '탄윈(운)',
        arabic: 'كِتَابٌ',
        pronunciation: '키탑분',
      },
      {
        id: 'book-indef-mansub',
        caseId: 'mansub',
        caseLabel: '목적격',
        korean: '책을',
        roleKorean: '~을/를',
        endingMark: 'ـً',
        endingKorean: '탄윈(안)',
        arabic: 'كِتَابًا',
        pronunciation: '키탑반',
      },
      {
        id: 'book-indef-majrur',
        caseId: 'majrur',
        caseLabel: '소유·전치사격',
        korean: '책의',
        roleKorean: '~의',
        endingMark: 'ـٍ',
        endingKorean: '탄윈(인)',
        arabic: 'كِتَابٍ',
        pronunciation: '키탑빈',
      },
    ],
  },
  {
    id: 'student-def',
    nounKorean: '학생',
    nounHint: 'student',
    definiteLabel: '한정 (ال)',
    forms: [
      {
        id: 'student-def-marfu',
        caseId: 'marfu',
        caseLabel: '주격',
        korean: '학생(이)',
        roleKorean: '~이/가',
        endingMark: 'ـُ',
        endingKorean: '우',
        arabic: 'الطَّالِبُ',
        pronunciation: '앗탈리부',
      },
      {
        id: 'student-def-mansub',
        caseId: 'mansub',
        caseLabel: '목적격',
        korean: '학생을',
        roleKorean: '~을/를',
        endingMark: 'ـَ',
        endingKorean: '아',
        arabic: 'الطَّالِبَ',
        pronunciation: '앗탈리바',
      },
      {
        id: 'student-def-majrur',
        caseId: 'majrur',
        caseLabel: '소유·전치사격',
        korean: '학생의',
        roleKorean: '~의',
        endingMark: 'ـِ',
        endingKorean: '이',
        arabic: 'الطَّالِبِ',
        pronunciation: '앗탈리비',
      },
    ],
  },
]

export const caseVowelSentenceExamples: CaseVowelSentenceExample[] = [
  {
    id: 'ex-patient',
    korean: '환자가 왔다',
    hint: 'The patient came.',
    arabic: 'جَاءَ الْمَرِيضُ',
    pronunciation: '자아 알마리드',
    caseLabel: '주격',
    note: '행동 주체 → 끝에 ـُ (우)',
  },
  {
    id: 'ex-medicine',
    korean: '약을 먹었다',
    hint: 'He took the medicine.',
    arabic: 'أَخَذَ الدَواءَ',
    pronunciation: '아카데 알다와아',
    caseLabel: '목적격',
    note: '동사 목적어 → 끝에 ـَ (아)',
  },
  {
    id: 'ex-hospital',
    korean: '병원에',
    hint: 'in the hospital',
    arabic: 'فِي الْمُسْتَشْفَى',
    pronunciation: '피 알무스타쉬파',
    caseLabel: '소유·전치사격',
    note: '전치사 في(피) 뒤 → 끝에 ـِ (이)',
  },
]

/** 검색·레거시 호환용 flat 목록 */
export function getCaseVowelDrillItems(): CaseVowelDrillItem[] {
  const fromSets = caseVowelNounSets.flatMap((set) =>
    set.forms.map((form) => ({
      id: form.id,
      korean: `${set.nounKorean} · ${form.korean} (${set.definiteLabel})`,
      hint: `${form.caseLabel} · ${form.roleKorean}`,
      arabic: form.arabic,
      pronunciation: form.pronunciation,
    })),
  )

  const fromSentences = caseVowelSentenceExamples.map((item) => ({
    id: item.id,
    korean: item.korean,
    hint: item.hint,
    arabic: item.arabic,
    pronunciation: item.pronunciation,
  }))

  return [...fromSets, ...fromSentences]
}
