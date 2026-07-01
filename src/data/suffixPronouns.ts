export type SuffixPronounExample = {
  korean: string
  hint: string
  arabic: string
  pronunciation: string
}

export type SuffixPronounItem = {
  id: string
  korean: string
  hint: string
  standaloneArabic: string
  standalonePronunciation: string
  suffixArabic: string
  suffixPronunciation: string
  examples: SuffixPronounExample[]
}

export const suffixPronouns: SuffixPronounItem[] = [
  {
    id: 'ana',
    korean: '나',
    hint: 'I',
    standaloneArabic: 'أَنَا',
    standalonePronunciation: '아나',
    suffixArabic: 'ـي',
    suffixPronunciation: '이',
    examples: [
      {
        korean: '내 책',
        hint: 'my book',
        arabic: 'كِتَابِي',
        pronunciation: '키타비',
      },
      {
        korean: '내 커피',
        hint: 'my coffee',
        arabic: 'قَهْوَتِي',
        pronunciation: '까흐와티',
      },
    ],
  },
  {
    id: 'anta',
    korean: '너',
    hint: 'you',
    standaloneArabic: 'أَنْتَ',
    standalonePronunciation: '안타',
    suffixArabic: 'ـكَ',
    suffixPronunciation: '카',
    examples: [
      {
        korean: '네 책',
        hint: 'your book',
        arabic: 'كِتَابُكَ',
        pronunciation: '키타부카',
      },
      {
        korean: '네 커피',
        hint: 'your coffee',
        arabic: 'قَهْوَتُكَ',
        pronunciation: '까흐와투카',
      },
    ],
  },
  {
    id: 'huwa',
    korean: '그',
    hint: 'he',
    standaloneArabic: 'هُوَ',
    standalonePronunciation: '후와',
    suffixArabic: 'ـهُ',
    suffixPronunciation: '후',
    examples: [
      {
        korean: '그의 책',
        hint: 'his book',
        arabic: 'كِتَابُهُ',
        pronunciation: '키타부후',
      },
      {
        korean: '그의 커피',
        hint: 'his coffee',
        arabic: 'قَهْوَتُهُ',
        pronunciation: '까흐와투후',
      },
    ],
  },
  {
    id: 'hiya',
    korean: '그녀',
    hint: 'she',
    standaloneArabic: 'هِيَ',
    standalonePronunciation: '히야',
    suffixArabic: 'ـهَا',
    suffixPronunciation: '하',
    examples: [
      {
        korean: '그녀의 책',
        hint: 'her book',
        arabic: 'كِتَابُهَا',
        pronunciation: '키타부하',
      },
      {
        korean: '그녀의 커피',
        hint: 'her coffee',
        arabic: 'قَهْوَتُهَا',
        pronunciation: '까흐와투하',
      },
    ],
  },
  {
    id: 'nahnu',
    korean: '우리',
    hint: 'we',
    standaloneArabic: 'نَحْنُ',
    standalonePronunciation: '나흐누',
    suffixArabic: 'ـنَا',
    suffixPronunciation: '나',
    examples: [
      {
        korean: '우리 책',
        hint: 'our book',
        arabic: 'كِتَابُنَا',
        pronunciation: '키타부나',
      },
      {
        korean: '우리 커피',
        hint: 'our coffee',
        arabic: 'قَهْوَتُنَا',
        pronunciation: '까흐와투나',
      },
    ],
  },
  {
    id: 'antum',
    korean: '너희',
    hint: 'you (plural)',
    standaloneArabic: 'أَنْتُمْ',
    standalonePronunciation: '안툼',
    suffixArabic: 'ـكُم',
    suffixPronunciation: '쿰',
    examples: [
      {
        korean: '너희 책',
        hint: 'your book',
        arabic: 'كِتَابُكُم',
        pronunciation: '키타부쿰',
      },
      {
        korean: '너희 커피',
        hint: 'your coffee',
        arabic: 'قَهْوَتُكُم',
        pronunciation: '까흐와투쿰',
      },
    ],
  },
  {
    id: 'hum',
    korean: '그들',
    hint: 'they',
    standaloneArabic: 'هُمْ',
    standalonePronunciation: '훔',
    suffixArabic: 'ـهُم',
    suffixPronunciation: '훔',
    examples: [
      {
        korean: '그들의 책',
        hint: 'their book',
        arabic: 'كِتَابُهُم',
        pronunciation: '키타부훔',
      },
      {
        korean: '그들의 커피',
        hint: 'their coffee',
        arabic: 'قَهْوَتُهُم',
        pronunciation: '까흐와투훔',
      },
    ],
  },
]
