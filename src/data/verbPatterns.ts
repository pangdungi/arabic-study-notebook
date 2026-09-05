import { getVerb, type VerbItem } from './verbs'
import { getPatternVerb } from './verbPatternVerbs'

export type VerbPatternForm = {
  id: string
  label: string
  patternArabic: string
  patternPronunciation: string
  note: string
  examples?: string
  verbIds: string[]
  comingSoon?: boolean
}

export const verbPatternForms: VerbPatternForm[] = [
  {
    id: 'form-1',
    label: '1형',
    patternArabic: 'فَعَلَ',
    patternPronunciation: '파알라',
    note: '기본 3자동사. 어근 3글자 + 과거·현재 어미로 활용합니다.',
    examples: '다라바 · 키타바 · 다라싸',
    verbIds: ['hit', 'wrote', 'studied'],
  },
  {
    id: 'form-2',
    label: '2형',
    patternArabic: 'فَعَّلَ',
    patternPronunciation: '파앨라',
    note: '가운데 글자에 쉼표(شَدَّة)가 붙습니다. 강조·원인·만들기 등 뜻이 늘어납니다.',
    examples: '다르라싸',
    verbIds: ['taught-lesson'],
  },
  {
    id: 'form-3',
    label: '3형',
    patternArabic: 'فَعَلَ',
    patternPronunciation: '파알라',
    note: 'ف-ع-ل 어근 패턴 연습용. 활용 형태를 익힐 때 씁니다.',
    examples: '파알라',
    verbIds: ['did'],
  },
  {
    id: 'form-4',
    label: '4형',
    patternArabic: 'أَفْعَلَ',
    patternPronunciation: '아프알라',
    note: '앞에 همزة(أ)가 붙습니다.',
    verbIds: [],
    comingSoon: true,
  },
  {
    id: 'form-5',
    label: '5형',
    patternArabic: 'تَفَعَّلَ',
    patternPronunciation: '타파알라',
    note: '2형 앞에 ت(타)가 붙습니다.',
    verbIds: [],
    comingSoon: true,
  },
  {
    id: 'form-6',
    label: '6형',
    patternArabic: 'تَفَاعَلَ',
    patternPronunciation: '타파알라',
    note: '3형 앞에 ت(타)가 붙습니다. 서로 ~하다 뜻이 많습니다.',
    verbIds: [],
    comingSoon: true,
  },
  {
    id: 'form-7',
    label: '7형',
    patternArabic: 'اِنْفَعَلَ',
    patternPronunciation: '인파알라',
    note: '앞에 اِنْ(인)이 붙습니다. 수동·자동 변화에 씁니다.',
    verbIds: [],
    comingSoon: true,
  },
  {
    id: 'form-8',
    label: '8형',
    patternArabic: 'اِفْتَعَلَ',
    patternPronunciation: '이프타알라',
    note: '첫·둘째 글자 사이에 ت(타)가 들어갑니다.',
    verbIds: [],
    comingSoon: true,
  },
  {
    id: 'form-9',
    label: '9형',
    patternArabic: 'اِفْعَلَّ',
    patternPronunciation: '이프알라',
    note: '셋째 글자에 쉼표(شَدَّة)가 붙고 앞에 اِ(이)가 붙습니다.',
    verbIds: [],
    comingSoon: true,
  },
]

export function getVerbPatternForm(id: string): VerbPatternForm | undefined {
  return verbPatternForms.find((form) => form.id === id)
}

export function getVerbsForPattern(form: VerbPatternForm): VerbItem[] {
  return form.verbIds
    .map((verbId) => getPatternVerb(verbId) ?? getVerb(verbId))
    .filter((verb): verb is VerbItem => Boolean(verb))
}
