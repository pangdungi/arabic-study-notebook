export type NegationDrillItem = {
  id: string
  korean: string
  hint: string
  arabic: string
  pronunciation: string
}

export type NegationCategory = {
  id: string
  title: string
  particleArabic: string
  particlePronunciation: string
  note: string
  pattern: string
  items: NegationDrillItem[]
}

export const negationCategories: NegationCategory[] = [
  {
    id: 'present',
    title: '현재 부정',
    particleArabic: 'لَا',
    particlePronunciation: '라',
    pattern: 'لا + 현재형 동사',
    note: '지금 하지 않거나, 습관적으로 하지 않을 때 씁니다. لا(라)는 동사 바로 앞에 붙습니다.',
    items: [
      {
        id: 'present-i',
        korean: '나는 쓰지 않는다',
        hint: "I don't write",
        arabic: 'لَا أَكْتُبُ',
        pronunciation: '라 아크투부',
      },
      {
        id: 'present-you',
        korean: '너는 쓰지 않는다',
        hint: "you don't write",
        arabic: 'لَا تَكْتُبُ',
        pronunciation: '라 타크투부',
      },
      {
        id: 'present-he',
        korean: '그는 쓰지 않는다',
        hint: "he doesn't write",
        arabic: 'لَا يَكْتُبُ',
        pronunciation: '라 야크투부',
      },
      {
        id: 'present-we',
        korean: '우리는 쓰지 않는다',
        hint: "we don't write",
        arabic: 'لَا نَكْتُبُ',
        pronunciation: '라 낙투부',
      },
    ],
  },
  {
    id: 'past-ma',
    title: '과거 부정 (ما)',
    particleArabic: 'مَا',
    particlePronunciation: '마',
    pattern: 'ما + 과거형 동사',
    note: '이미 지나간 일을 부정할 때 씁니다. ما(마)는 과거형 동사 앞에 붙습니다.',
    items: [
      {
        id: 'past-ma-i',
        korean: '나는 쓰지 않았다',
        hint: "I didn't write",
        arabic: 'مَا كَتَبْتُ',
        pronunciation: '마 카탭투',
      },
      {
        id: 'past-ma-you',
        korean: '너는 쓰지 않았다',
        hint: "you didn't write",
        arabic: 'مَا كَتَبْتَ',
        pronunciation: '마 카탭타',
      },
      {
        id: 'past-ma-he',
        korean: '그는 쓰지 않았다',
        hint: "he didn't write",
        arabic: 'مَا كَتَبَ',
        pronunciation: '마 카타바',
      },
      {
        id: 'past-ma-we',
        korean: '우리는 쓰지 않았다',
        hint: "we didn't write",
        arabic: 'مَا كَتَبْنَا',
        pronunciation: '마 카탭나',
      },
    ],
  },
  {
    id: 'past-lam',
    title: '과거 부정 (لم)',
    particleArabic: 'لَمْ',
    particlePronunciation: '람',
    pattern: 'لم + 현재형(절법)',
    note: 'ما(마)와 비슷하게 “~하지 않았다”지만, 뒤 동사는 과거형이 아니라 현재형(절법)으로 씁니다. لم(람)을 씁니다.',
    items: [
      {
        id: 'past-lam-i',
        korean: '나는 쓰지 않았다',
        hint: 'I did not write',
        arabic: 'لَمْ أَكْتُبْ',
        pronunciation: '람 아크투브',
      },
      {
        id: 'past-lam-you',
        korean: '너는 쓰지 않았다',
        hint: 'you did not write',
        arabic: 'لَمْ تَكْتُبْ',
        pronunciation: '람 타크투브',
      },
      {
        id: 'past-lam-he',
        korean: '그는 쓰지 않았다',
        hint: 'he did not write',
        arabic: 'لَمْ يَكْتُبْ',
        pronunciation: '람 야크투브',
      },
      {
        id: 'past-lam-we',
        korean: '우리는 쓰지 않았다',
        hint: 'we did not write',
        arabic: 'لَمْ نَكْتُبْ',
        pronunciation: '람 낙투브',
      },
    ],
  },
  {
    id: 'future',
    title: '미래 부정',
    particleArabic: 'لَنْ',
    particlePronunciation: '란',
    pattern: 'لن + 현재형(가정법)',
    note: '앞으로 하지 않을 일을 부정합니다. لن(란) 뒤 동사는 가정법(단모음)으로 바뀝니다.',
    items: [
      {
        id: 'future-i',
        korean: '나는 쓰지 않을 것이다',
        hint: 'I will not write',
        arabic: 'لَنْ أَكْتُبَ',
        pronunciation: '란 아크투바',
      },
      {
        id: 'future-you',
        korean: '너는 쓰지 않을 것이다',
        hint: 'you will not write',
        arabic: 'لَنْ تَكْتُبَ',
        pronunciation: '란 타크투바',
      },
      {
        id: 'future-he',
        korean: '그는 쓰지 않을 것이다',
        hint: 'he will not write',
        arabic: 'لَنْ يَكْتُبَ',
        pronunciation: '란 야크투바',
      },
      {
        id: 'future-we',
        korean: '우리는 쓰지 않을 것이다',
        hint: 'we will not write',
        arabic: 'لَنْ نَكْتُبَ',
        pronunciation: '란 낙투바',
      },
    ],
  },
  {
    id: 'nominal',
    title: '명사문 부정',
    particleArabic: 'لَيْسَ',
    particlePronunciation: '레이사',
    pattern: 'ليس + 명사/형용사',
    note: '“~이다”를 부정할 때 씁니다. 기본형 ليس(레이사)는 주어에 따라 لستُ, ليسَتْ 등으로 바뀝니다.',
    items: [
      {
        id: 'nominal-i',
        korean: '나는 학생이 아니다',
        hint: 'I am not a student',
        arabic: 'لَسْتُ طَالِبًا',
        pronunciation: '라스투 탈리반',
      },
      {
        id: 'nominal-you',
        korean: '너는 학생이 아니다',
        hint: 'you are not a student',
        arabic: 'لَسْتَ طَالِبًا',
        pronunciation: '라스타 탈리반',
      },
      {
        id: 'nominal-he',
        korean: '그는 학생이 아니다',
        hint: 'he is not a student',
        arabic: 'لَيْسَ طَالِبًا',
        pronunciation: '레이사 탈리반',
      },
      {
        id: 'nominal-she',
        korean: '그녀는 학생이 아니다',
        hint: 'she is not a student',
        arabic: 'لَيْسَتْ طَالِبَةً',
        pronunciation: '레이사트 탈리바탄',
      },
      {
        id: 'nominal-we',
        korean: '우리는 학생이 아니다',
        hint: 'we are not students',
        arabic: 'لَسْنَا طُلَّابًا',
        pronunciation: '라스나 툴라반',
      },
    ],
  },
  {
    id: 'imperative',
    title: '명령 부정',
    particleArabic: 'لَا',
    particlePronunciation: '라',
    pattern: 'لا + 명령형(절법)',
    note: '“~하지 마”라고 할 때 씁니다. 명령형 동사 앞에 لا(라)를 붙입니다.',
    items: [
      {
        id: 'imperative-you-m',
        korean: '쓰지 마 (남)',
        hint: "don't write (m.)",
        arabic: 'لَا تَكْتُبْ',
        pronunciation: '라 타크투브',
      },
      {
        id: 'imperative-you-f',
        korean: '쓰지 마 (여)',
        hint: "don't write (f.)",
        arabic: 'لَا تَكْتُبِي',
        pronunciation: '라 타크투비',
      },
      {
        id: 'imperative-you-pl',
        korean: '쓰지 마 (복수)',
        hint: "don't write (pl.)",
        arabic: 'لَا تَكْتُبُوا',
        pronunciation: '라 타크투부',
      },
    ],
  },
]

export function getNegationCategory(id: string): NegationCategory | undefined {
  return negationCategories.find((category) => category.id === id)
}
