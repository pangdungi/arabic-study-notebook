export type CaseVowelDrillItem = {
  id: string
  korean: string
  hint: string
  arabic: string
  pronunciation: string
}

export type CaseVowelGroup = {
  id: string
  title: string
  arabicTerm: string
  vowelMarks: string
  vowelKorean: string
  roleKorean: string
  note: string
  items: CaseVowelDrillItem[]
}

export const caseVowelIntro = {
  title: '격모음',
  summary:
    '아랍어 명사는 문장 안 역할(주어·목적어·전치사 뒤 등)에 따라 끝모음이 바뀝니다. 한국어의 「이/가」「을/를」「의」 조사 역할을 끝에 붙는 모음이 합니다.',
  bullets: [
    '주격 — 끝이 우(u) 소리 (ـُ). 비한정 명사는 운(un) (ـٌ, 탄윈).',
    '목적격 — 끝이 아(a) 소리 (ـَ). 비한정은 안(an) (ـً).',
    '소유격 — 끝이 이(i) 소리 (ـِ). 비한정은 인(in) (ـٍ).',
    'ال 정관사가 붙으면 탄윈(ٌ ً ٍ)은 사라지고 단모음(ُ َ ِ)만 남습니다.',
  ],
}

export const caseVowelGroups: CaseVowelGroup[] = [
  {
    id: 'marfu',
    title: '주격',
    arabicTerm: 'الرَّفْعُ · مَرْفُوع',
    vowelMarks: 'ـُ · ـٌ',
    vowelKorean: '담마(우) · 탄윈 담마(운)',
    roleKorean: '주어, 술어 — 「~이/가」',
    note: '행동을 하는 주체이거나, 명사문에서 상태를 말할 때(술어) 씁니다.',
    items: [
      {
        id: 'marfu-book-indef',
        korean: '책(이) — 비한정',
        hint: 'book (subject, indefinite)',
        arabic: 'كِتَابٌ',
        pronunciation: '키탑분',
      },
      {
        id: 'marfu-book-def',
        korean: '그 책(이)',
        hint: 'the book (subject)',
        arabic: 'الْكِتَابُ',
        pronunciation: '알키탑부',
      },
      {
        id: 'marfu-patient',
        korean: '환자가 왔다',
        hint: 'The patient came.',
        arabic: 'جَاءَ الْمَرِيضُ',
        pronunciation: '자아 알마리드',
      },
    ],
  },
  {
    id: 'mansub',
    title: '목적격',
    arabicTerm: 'النَّصْبُ · مَنْصُوب',
    vowelMarks: 'ـَ · ـً',
    vowelKorean: '팟하(아) · 탄윈 팟하(안)',
    roleKorean: '목적어 — 「~을/를」',
    note: '동사가 직접 행하는 대상(목적어)일 때 씁니다.',
    items: [
      {
        id: 'mansub-book-indef',
        korean: '책을 — 비한정',
        hint: 'book (object, indefinite)',
        arabic: 'كِتَابًا',
        pronunciation: '키탑반',
      },
      {
        id: 'mansub-book-def',
        korean: '그 책을',
        hint: 'the book (object)',
        arabic: 'الْكِتَابَ',
        pronunciation: '알키탑바',
      },
      {
        id: 'mansub-medicine',
        korean: '약을 먹었다',
        hint: 'He took the medicine.',
        arabic: 'أَخَذَ الدَواءَ',
        pronunciation: '아카데 알다와아',
      },
    ],
  },
  {
    id: 'majrur',
    title: '소유격',
    arabicTerm: 'الجَرُّ · مَجْرُور',
    vowelMarks: 'ـِ · ـٍ',
    vowelKorean: '카스라(이) · 탄윈 카스라(인)',
    roleKorean: '전치사 뒤, 소유 — 「~의」「~에」',
    note: '전치사(في, من, على …) 바로 뒤 명사나, 「A의 B」에서 B(소유 명사)에 씁니다.',
    items: [
      {
        id: 'majrur-book-indef',
        korean: '책의 — 비한정',
        hint: 'of a book (genitive, indefinite)',
        arabic: 'كِتَابٍ',
        pronunciation: '키탑빈',
      },
      {
        id: 'majrur-book-def',
        korean: '그 책의',
        hint: 'of the book',
        arabic: 'الْكِتَابِ',
        pronunciation: '알키탑비',
      },
      {
        id: 'majrur-in-hospital',
        korean: '병원에',
        hint: 'in the hospital',
        arabic: 'فِي الْمُسْتَشْفَى',
        pronunciation: '피 알무스타쉬파',
      },
    ],
  },
]
