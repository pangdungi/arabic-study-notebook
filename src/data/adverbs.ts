import { degreeAdverbs } from './degreeAdverbs'
import { frequencyAdverbs } from './frequencyAdverbs'
import { restrictiveAdverbs } from './restrictiveAdverbs'
import type { StudyCardItem } from './studyCard'
import { timeAdverbs } from './timeAdverbs'

/** 검색·호환용 — 분류별 덱은 각 파일을 직접 import */
export const adverbs: StudyCardItem[] = [
  ...frequencyAdverbs,
  ...timeAdverbs,
  ...degreeAdverbs,
  ...restrictiveAdverbs,
]

export { degreeAdverbs, frequencyAdverbs, restrictiveAdverbs, timeAdverbs }
