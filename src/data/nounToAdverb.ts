export type NounToAdverbItem = {
  id: string
  nounKorean: string
  adverbKorean: string
  hint: string
  nounArabic: string
  adverbArabic: string
  nounPronunciation: string
  adverbPronunciation: string
}

export const nounToAdverbItems: NounToAdverbItem[] = [
  {
    id: 'morning',
    nounKorean: '아침',
    adverbKorean: '아침에',
    hint: 'morning → in the morning',
    nounArabic: 'صَبَاح',
    adverbArabic: 'صَبَاحًا',
    nounPronunciation: '사바',
    adverbPronunciation: '사바한',
  },
  {
    id: 'evening',
    nounKorean: '저녁',
    adverbKorean: '저녁에',
    hint: 'evening → in the evening',
    nounArabic: 'مَسَاء',
    adverbArabic: 'مَسَاءً',
    nounPronunciation: '마사',
    adverbPronunciation: '마사안',
  },
  {
    id: 'night',
    nounKorean: '밤',
    adverbKorean: '밤에',
    hint: 'night → at night',
    nounArabic: 'لَيْل',
    adverbArabic: 'لَيْلًا',
    nounPronunciation: '레일',
    adverbPronunciation: '라일란',
  },
  {
    id: 'noon',
    nounKorean: '점심',
    adverbKorean: '점심에',
    hint: 'noon → at noon',
    nounArabic: 'ظُهْر',
    adverbArabic: 'ظُهْرًا',
    nounPronunciation: '두르',
    adverbPronunciation: '두란',
  },
  {
    id: 'daytime',
    nounKorean: '낮',
    adverbKorean: '낮에',
    hint: 'daytime → in the daytime',
    nounArabic: 'نَهَار',
    adverbArabic: 'نَهَارًا',
    nounPronunciation: '나하르',
    adverbPronunciation: '나하란',
  },
]
