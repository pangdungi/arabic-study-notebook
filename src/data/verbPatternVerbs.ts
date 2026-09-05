import { buildVerbFromSeed, type VerbItem, type VerbSeed } from './verbs'

const patternVerbSeeds: VerbSeed[] = [
  {
    id: 'hit',
    pastEnglish: 'hit',
    pastKorean: '쳤다',
    past: ['ضَرَبْتُ', 'ضَرَبْتَ', 'ضَرَبْتِ', 'ضَرَبَ', 'ضَرَبَتْ', 'ضَرَبْنَا', 'ضَرَبْتُمْ', 'ضَرَبُوا'],
    pastPron: ['다라브투', '다라브타', '다라브티', '다라바', '다라바트', '다라브나', '다라브툼', '다라부'],
    present: ['أَضْرِبُ', 'تَضْرِبُ', 'تَضْرِبِينَ', 'يَضْرِبُ', 'تَضْرِبُ', 'نَضْرِبُ', 'تَضْرِبُونَ', 'يَضْرِبُونَ'],
    presentPron: ['아드릅부', '타드릅부', '타드릅비나', '야드릅부', '타드릅부', '나드릅부', '타드릅부나', '야드릅부나'],
  },
  {
    id: 'taught-lesson',
    pastEnglish: 'taught',
    pastKorean: '가르쳤다',
    past: ['دَرَّسْتُ', 'دَرَّسْتَ', 'دَرَّسْتِ', 'دَرَّسَ', 'دَرَّسَتْ', 'دَرَّسْنَا', 'دَرَّسْتُمْ', 'دَرَّسُوا'],
    pastPron: ['다르라스투', '다르라스타', '다르라스티', '다르라사', '다르라사트', '다르라스나', '다르라스툼', '다르라수'],
    present: ['أُدَرِّسُ', 'تُدَرِّسُ', 'تُدَرِّسِينَ', 'يُدَرِّسُ', 'تُدَرِّسُ', 'نُدَرِّسُ', 'تُدَرِّسُونَ', 'يُدَرِّسُونَ'],
    presentPron: ['우다리스', '투다리스', '투다리시나', '유다리스', '투다리스', '누다리스', '투다리스나', '유다리스나'],
  },
]

const patternVerbs: VerbItem[] = patternVerbSeeds.map(buildVerbFromSeed)

export function getPatternVerb(id: string): VerbItem | undefined {
  return patternVerbs.find((verb) => verb.id === id)
}
