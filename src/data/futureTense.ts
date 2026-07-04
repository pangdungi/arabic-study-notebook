import { verbPersonMeta } from './verbs'

export type FutureForm = {
  arabic: string
  pronunciation: string
}

export type FuturePersonRow = {
  id: string
  label: string
  hint: string
  future: FutureForm
}

export type FutureVerbItem = {
  id: string
  futureEnglish: string
  futureKorean: string
  heFuture: FutureForm
  rows: FuturePersonRow[]
}

export const futureTenseIntro = {
  title: '미래시제',
  summary:
    '아랍어 미래는 별도 어미가 아니라 **سَ**(사) 또는 **سَوْفَ**(소파)를 **현재형 동사 앞**에 붙여 만듭니다.',
  bullets: [
    'سَ + 현재형 — 곧 ~할 것이다 (가까운 미래)',
    'سَوْفَ + 현재형 — ~할 것이다 (조금 더 먼 미래, 격식체에서도 자주 씀)',
    '인칭 접두사는 현재형과 같이 سَ 뒤에 붙습니다. (예: سَيَذْهَبُ — 그가 갈 것이다)',
  ],
  patterns: [
    {
      id: 'sa',
      korean: 'سَ + 현재형',
      hint: 'sa + present',
      arabic: 'سَيَذْهَبُ',
      pronunciation: '사야드하부',
      note: '그가 갈 것이다',
    },
    {
      id: 'sawfa',
      korean: 'سَوْفَ + 현재형',
      hint: 'sawfa + present',
      arabic: 'سَوْفَ أَذْهَبُ',
      pronunciation: '소파 아드하부',
      note: '나는 갈 것이다',
    },
  ],
}

type FutureVerbSeed = {
  id: string
  futureEnglish: string
  futureKorean: string
  future: readonly [string, string, string, string, string, string, string, string]
  futurePron: readonly [string, string, string, string, string, string, string, string]
}

function buildFutureVerb(seed: FutureVerbSeed): FutureVerbItem {
  const rows = verbPersonMeta.map((person, index) => ({
    id: person.id,
    label: person.label,
    hint: person.hint,
    future: { arabic: seed.future[index], pronunciation: seed.futurePron[index] },
  }))

  return {
    id: seed.id,
    futureEnglish: seed.futureEnglish,
    futureKorean: seed.futureKorean,
    heFuture: rows[3].future,
    rows,
  }
}

const futureVerbSeeds: FutureVerbSeed[] = [
  {
    id: 'went',
    futureEnglish: 'will go',
    futureKorean: '갈 것이다',
    future: [
      'سَأَذْهَبُ',
      'سَتَذْهَبُ',
      'سَتَذْهَبِينَ',
      'سَيَذْهَبُ',
      'سَتَذْهَبُ',
      'سَنَذْهَبُ',
      'سَتَذْهَبُونَ',
      'سَيَذْهَبُونَ',
    ],
    futurePron: [
      '사아드하부',
      '사타드하부',
      '사타드하비나',
      '사야드하부',
      '사타드하부',
      '사나드하부',
      '사타드하부나',
      '사야드하부나',
    ],
  },
  {
    id: 'ate',
    futureEnglish: 'will eat',
    futureKorean: '먹을 것이다',
    future: [
      'سَآكُلُ',
      'سَتَأْكُلُ',
      'سَتَأْكُلِينَ',
      'سَيَأْكُلُ',
      'سَتَأْكُلُ',
      'سَنَأْكُلُ',
      'سَتَأْكُلُونَ',
      'سَيَأْكُلُونَ',
    ],
    futurePron: [
      '사아쿨루',
      '사타쿨루',
      '사타쿨리나',
      '사야쿨루',
      '사타쿨루',
      '사나쿨루',
      '사타쿨루나',
      '사야쿨루나',
    ],
  },
  {
    id: 'wrote',
    futureEnglish: 'will write',
    futureKorean: '쓸 것이다',
    future: [
      'سَأَكْتُبُ',
      'سَتَكْتُبُ',
      'سَتَكْتُبِينَ',
      'سَيَكْتُبُ',
      'سَتَكْتُبُ',
      'سَنَكْتُبُ',
      'سَتَكْتُبُونَ',
      'سَيَكْتُبُونَ',
    ],
    futurePron: [
      '사아크투부',
      '사타크투부',
      '사타크투비나',
      '사야크투부',
      '사타크투부',
      '사나크투부',
      '사타크투부나',
      '사야크투부나',
    ],
  },
  {
    id: 'worked',
    futureEnglish: 'will work',
    futureKorean: '일할 것이다',
    future: [
      'سَأَعْمَلُ',
      'سَتَعْمَلُ',
      'سَتَعْمَلِينَ',
      'سَيَعْمَلُ',
      'سَتَعْمَلُ',
      'سَنَعْمَلُ',
      'سَتَعْمَلُونَ',
      'سَيَعْمَلُونَ',
    ],
    futurePron: [
      '사아아말루',
      '사타아말루',
      '사타아말리나',
      '사야아말루',
      '사타아말루',
      '사나아말루',
      '사타아말루나',
      '사야아말루나',
    ],
  },
  {
    id: 'drank',
    futureEnglish: 'will drink',
    futureKorean: '마실 것이다',
    future: [
      'سَأَشْرَبُ',
      'سَتَشْرَبُ',
      'سَتَشْرَبِينَ',
      'سَيَشْرَبُ',
      'سَتَشْرَبُ',
      'سَنَشْرَبُ',
      'سَتَشْرَبُونَ',
      'سَيَشْرَبُونَ',
    ],
    futurePron: [
      '사아슈라부',
      '사타슈라부',
      '사타슈라비나',
      '사야슈라부',
      '사타슈라부',
      '사나슈라부',
      '사타슈라부나',
      '사야슈라부나',
    ],
  },
  {
    id: 'read',
    futureEnglish: 'will read',
    futureKorean: '읽을 것이다',
    future: [
      'سَأَقْرَأُ',
      'سَتَقْرَأُ',
      'سَتَقْرَئِينَ',
      'سَيَقْرَأُ',
      'سَتَقْرَأُ',
      'سَنَقْرَأُ',
      'سَتَقْرَؤُونَ',
      'سَيَقْرَؤُونَ',
    ],
    futurePron: [
      '사아까라아',
      '사타까라아',
      '사타까라아이나',
      '사야까라아',
      '사타까라아',
      '사나까라아',
      '사타까라아우나',
      '사야까라아우나',
    ],
  },
  {
    id: 'spoke',
    futureEnglish: 'will speak',
    futureKorean: '말할 것이다',
    future: [
      'سَأَتَكَلَّمُ',
      'سَتَتَكَلَّمُ',
      'سَتَتَكَلَّمِينَ',
      'سَيَتَكَلَّمُ',
      'سَتَتَكَلَّمُ',
      'سَنَتَكَلَّمُ',
      'سَتَتَكَلَّمُونَ',
      'سَيَتَكَلَّمُونَ',
    ],
    futurePron: [
      '사아타칼라무',
      '사타타칼라무',
      '사타타칼라미나',
      '사야타칼라무',
      '사타타칼라무',
      '사나타칼라무',
      '사타타칼라무나',
      '사야타칼라무나',
    ],
  },
  {
    id: 'returned',
    futureEnglish: 'will return',
    futureKorean: '돌아올 것이다',
    future: [
      'سَأَرْجِعُ',
      'سَتَرْجِعُ',
      'سَتَرْجِعِينَ',
      'سَيَرْجِعُ',
      'سَتَرْجِعُ',
      'سَنَرْجِعُ',
      'سَتَرْجِعُونَ',
      'سَيَرْجِعُونَ',
    ],
    futurePron: [
      '사아르지우',
      '사타르지우',
      '사타르지이나',
      '사야르지우',
      '사타르지우',
      '사나르지우',
      '사타르지우나',
      '사야르지우나',
    ],
  },
]

export const futureVerbs: FutureVerbItem[] = futureVerbSeeds.map(buildFutureVerb)

export function getFutureVerb(id: string): FutureVerbItem | undefined {
  return futureVerbs.find((verb) => verb.id === id)
}
