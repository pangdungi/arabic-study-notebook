export type LetterClass = 'sun' | 'moon'

export type DefiniteArticleLetter = {
  id: string
  letterClass: LetterClass
  letterArabic: string
  letterKorean: string
}

export type DefiniteArticleExample = {
  id: string
  letterClass: LetterClass
  letterArabic: string
  letterKorean: string
  nounKorean: string
  nounArabic: string
  withAlArabic: string
  pronunciation: string
  readHow: string
}

export const definiteArticleIntro = {
  title: '정관사 ال',
}

export const definiteArticlePronunciationRules = {
  sun: {
    title: '태양문자 — 이렇게 읽어요',
    letters: 'ت ث د ذ ر ز س ش ص ض ط ظ ل ن',
    steps: [
      '명사 앞에 ال을 붙입니다.',
      'ل(람)은 읽지 않습니다.',
      '바로 다음 글자를 쉼표(ّ)처럼 강하게 이어 읽습니다.',
    ],
    pattern: '앞글자 소리 + · + 나머지',
    compareLabel: '태양',
    compareWord: '태양',
    compareArabic: 'الشَّمْس',
    comparePron: '앗·샴스',
  },
  moon: {
    title: '달문자 — 이렇게 읽어요',
    letters: 'ا ب ج ح خ ع غ ف ق ك م ه و ي …',
    steps: [
      '명사 앞에 ال을 붙입니다.',
      '알을 그대로 읽습니다.',
      '이어서 다음 글자 소리를 붙입니다.',
    ],
    pattern: '알 · + 나머지',
    compareLabel: '달',
    compareWord: '달',
    compareArabic: 'الْقَمَر',
    comparePron: '알·카마르',
  },
}

export const sunLetters: DefiniteArticleLetter[] = [
  { id: 'sun-ta', letterClass: 'sun', letterArabic: 'ت', letterKorean: '타' },
  { id: 'sun-tha', letterClass: 'sun', letterArabic: 'ث', letterKorean: '사' },
  { id: 'sun-dal', letterClass: 'sun', letterArabic: 'د', letterKorean: '달' },
  { id: 'sun-dhal', letterClass: 'sun', letterArabic: 'ذ', letterKorean: '달' },
  { id: 'sun-ra', letterClass: 'sun', letterArabic: 'ر', letterKorean: '라' },
  { id: 'sun-zay', letterClass: 'sun', letterArabic: 'ز', letterKorean: '자' },
  { id: 'sun-sin', letterClass: 'sun', letterArabic: 'س', letterKorean: '신' },
  { id: 'sun-shin', letterClass: 'sun', letterArabic: 'ش', letterKorean: '쉰' },
  { id: 'sun-sad', letterClass: 'sun', letterArabic: 'ص', letterKorean: '솟' },
  { id: 'sun-dad', letterClass: 'sun', letterArabic: 'ض', letterKorean: '돗' },
  { id: 'sun-ta-emph', letterClass: 'sun', letterArabic: 'ط', letterKorean: '토' },
  { id: 'sun-za', letterClass: 'sun', letterArabic: 'ظ', letterKorean: '조' },
  { id: 'sun-lam', letterClass: 'sun', letterArabic: 'ل', letterKorean: '람' },
  { id: 'sun-nun', letterClass: 'sun', letterArabic: 'ن', letterKorean: '눈' },
]

export const moonLetters: DefiniteArticleLetter[] = [
  { id: 'moon-alif', letterClass: 'moon', letterArabic: 'ا', letterKorean: '알리프' },
  { id: 'moon-ba', letterClass: 'moon', letterArabic: 'ب', letterKorean: '바' },
  { id: 'moon-jeem', letterClass: 'moon', letterArabic: 'ج', letterKorean: '짐' },
  { id: 'moon-ha', letterClass: 'moon', letterArabic: 'ح', letterKorean: '하' },
  { id: 'moon-kha', letterClass: 'moon', letterArabic: 'خ', letterKorean: '카' },
  { id: 'moon-ayn', letterClass: 'moon', letterArabic: 'ع', letterKorean: '아인' },
  { id: 'moon-ghayn', letterClass: 'moon', letterArabic: 'غ', letterKorean: '가인' },
  { id: 'moon-fa', letterClass: 'moon', letterArabic: 'ف', letterKorean: '파' },
  { id: 'moon-qaf', letterClass: 'moon', letterArabic: 'ق', letterKorean: '까' },
  { id: 'moon-kaf', letterClass: 'moon', letterArabic: 'ك', letterKorean: '카프' },
  { id: 'moon-mim', letterClass: 'moon', letterArabic: 'م', letterKorean: '밈' },
  { id: 'moon-ha-end', letterClass: 'moon', letterArabic: 'ه', letterKorean: '하' },
  { id: 'moon-waw', letterClass: 'moon', letterArabic: 'و', letterKorean: '와' },
  { id: 'moon-ya', letterClass: 'moon', letterArabic: 'ي', letterKorean: '야' },
]

export const definiteArticleExamples: DefiniteArticleExample[] = [
  {
    id: 'ex-shams',
    letterClass: 'sun',
    letterArabic: 'ش',
    letterKorean: '쉰',
    nounKorean: '태양',
    nounArabic: 'شَمْس',
    withAlArabic: 'الشَّمْس',
    pronunciation: '앗·샴스',
    readHow: 'ل 빼고 sh(쉰) 강하게',
  },
  {
    id: 'ex-sama',
    letterClass: 'sun',
    letterArabic: 'س',
    letterKorean: '신',
    nounKorean: '하늘',
    nounArabic: 'سَمَاء',
    withAlArabic: 'السَّمَاء',
    pronunciation: '앗·사마아',
    readHow: 'ل 빼고 s(신) 강하게',
  },
  {
    id: 'ex-rajul',
    letterClass: 'sun',
    letterArabic: 'ر',
    letterKorean: '라',
    nounKorean: '남자',
    nounArabic: 'رَجُل',
    withAlArabic: 'الرَّجُل',
    pronunciation: '알라줄',
    readHow: 'ل 빼고 r(라) 강하게',
  },
  {
    id: 'ex-dar',
    letterClass: 'sun',
    letterArabic: 'د',
    letterKorean: '달',
    nounKorean: '집',
    nounArabic: 'دَار',
    withAlArabic: 'الدَّار',
    pronunciation: '알다르',
    readHow: 'ل 빼고 d(달) 강하게',
  },
  {
    id: 'ex-talib',
    letterClass: 'sun',
    letterArabic: 'ط',
    letterKorean: '토',
    nounKorean: '학생',
    nounArabic: 'طَالِب',
    withAlArabic: 'الطَّالِب',
    pronunciation: '알탈리브',
    readHow: 'ل 빼고 t(토) 강하게',
  },
  {
    id: 'ex-najm',
    letterClass: 'sun',
    letterArabic: 'ن',
    letterKorean: '눈',
    nounKorean: '별',
    nounArabic: 'نَجْم',
    withAlArabic: 'النَّجْم',
    pronunciation: '알나즘',
    readHow: 'ل 빼고 n(눈) 강하게',
  },
  {
    id: 'ex-layl',
    letterClass: 'sun',
    letterArabic: 'ل',
    letterKorean: '람',
    nounKorean: '밤',
    nounArabic: 'لَيْل',
    withAlArabic: 'اللَّيْل',
    pronunciation: '알라일',
    readHow: 'ل도 태양문자 → l(람) 강하게',
  },
  {
    id: 'ex-qamar',
    letterClass: 'moon',
    letterArabic: 'ق',
    letterKorean: '까',
    nounKorean: '달',
    nounArabic: 'قَمَر',
    withAlArabic: 'الْقَمَر',
    pronunciation: '알·카마르',
    readHow: '알 + q(까)',
  },
  {
    id: 'ex-kitab',
    letterClass: 'moon',
    letterArabic: 'ك',
    letterKorean: '카프',
    nounKorean: '책',
    nounArabic: 'كِتَاب',
    withAlArabic: 'الْكِتَاب',
    pronunciation: '알·키탑',
    readHow: '알 + k(카프)',
  },
  {
    id: 'ex-bab',
    letterClass: 'moon',
    letterArabic: 'ب',
    letterKorean: '바',
    nounKorean: '문',
    nounArabic: 'بَاب',
    withAlArabic: 'الْبَاب',
    pronunciation: '알·바브',
    readHow: '알 + b(바)',
  },
  {
    id: 'ex-marid',
    letterClass: 'moon',
    letterArabic: 'م',
    letterKorean: '밈',
    nounKorean: '환자',
    nounArabic: 'مَرِيض',
    withAlArabic: 'الْمَرِيض',
    pronunciation: '알·마리드',
    readHow: '알 + m(밈)',
  },
  {
    id: 'ex-jami',
    letterClass: 'moon',
    letterArabic: 'ج',
    letterKorean: '짐',
    nounKorean: '대학',
    nounArabic: 'جَامِعَة',
    withAlArabic: 'الْجَامِعَة',
    pronunciation: '알·자미아',
    readHow: '알 + j(짐)',
  },
]

export function getDefiniteArticleSearchItems(): Array<{
  id: string
  korean: string
  hint: string
  arabic: string
  pronunciation: string
}> {
  return definiteArticleExamples.map((item) => ({
    id: item.id,
    korean: `${item.nounKorean} (정관사)`,
    hint: `${item.letterClass === 'sun' ? '태양문자' : '달문자'} · ${item.readHow}`,
    arabic: item.withAlArabic,
    pronunciation: item.pronunciation,
  }))
}
