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
  bullets: [
    'سَ(싸) + 현재형 — 짧은 미래 · 곧 ~할 것이다',
    'سَوْفَ(싸우파) + 현재형 — 긴 미래 · 먼 ~할 것이다',
    '인칭 접두사는 현재형과 같이 سَ(싸) 뒤에 붙습니다. (예: سَيَذْهَبُ 싸야드하부 — 그가 갈 것이다)',
  ],
  patterns: [
    {
      id: 'sa',
      korean: 'سَ + 현재형',
      hint: '싸 + 현재형',
      timeKorean: '짧은 미래 · 가까운 미래',
      arabic: 'سَيَذْهَبُ',
      pronunciation: '싸야드하부',
      note: '그가 갈 것이다',
    },
    {
      id: 'sawfa',
      korean: 'سَوْفَ + 현재형',
      hint: '싸우파 + 현재형',
      timeKorean: '긴 미래 · 먼 미래',
      arabic: 'سَوْفَ أَذْهَبُ',
      pronunciation: '싸우파 아드하부',
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
      '싸아드하부',
      '싸타드하부',
      '싸타드하비나',
      '싸야드하부',
      '싸타드하부',
      '싸나드하부',
      '싸타드하부나',
      '싸야드하부나',
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
      '싸아쿨루',
      '싸타쿨루',
      '싸타쿨리나',
      '싸야쿨루',
      '싸타쿨루',
      '싸나쿨루',
      '싸타쿨루나',
      '싸야쿨루나',
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
      '싸아크투부',
      '싸타크투부',
      '싸타크투비나',
      '싸야크투부',
      '싸타크투부',
      '싸나크투부',
      '싸타크투부나',
      '싸야크투부나',
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
      '싸아아말루',
      '싸타아말루',
      '싸타아말리나',
      '싸야아말루',
      '싸타아말루',
      '싸나아말루',
      '싸타아말루나',
      '싸야아말루나',
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
      '싸아슈라부',
      '싸타슈라부',
      '싸타슈라비나',
      '싸야슈라부',
      '싸타슈라부',
      '싸나슈라부',
      '싸타슈라부나',
      '싸야슈라부나',
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
      '싸아까라아',
      '싸타까라아',
      '싸타까라아이나',
      '싸야까라아',
      '싸타까라아',
      '싸나까라아',
      '싸타까라아우나',
      '싸야까라아우나',
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
      '싸아타칼라무',
      '싸타타칼라무',
      '싸타타칼라미나',
      '싸야타칼라무',
      '싸타타칼라무',
      '싸나타칼라무',
      '싸타타칼라무나',
      '싸야타칼라무나',
    ],
  },
  {
    id: 'want',
    futureEnglish: 'will want',
    futureKorean: '원할 것이다',
    future: [
      'سَأُرِيدُ',
      'سَتُرِيدُ',
      'سَتُرِيدِينَ',
      'سَيُرِيدُ',
      'سَتُرِيدُ',
      'سَنُرِيدُ',
      'سَتُرِيدُونَ',
      'سَيُرِيدُونَ',
    ],
    futurePron: [
      '싸우리드',
      '싸투리드',
      '싸투리디나',
      '싸유리드',
      '싸투리드',
      '싸누리드',
      '싸투리두나',
      '싸유리두나',
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
      '싸아르지우',
      '싸타르지우',
      '싸타르지이나',
      '싸야르지우',
      '싸타르지우',
      '싸나르지우',
      '싸타르지우나',
      '싸야르지우나',
    ],
  },
]

export const futureVerbs: FutureVerbItem[] = futureVerbSeeds.map(buildFutureVerb)

export function getFutureVerb(id: string): FutureVerbItem | undefined {
  return futureVerbs.find((verb) => verb.id === id)
}
