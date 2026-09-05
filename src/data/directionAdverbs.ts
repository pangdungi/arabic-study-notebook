import { demonstrativeAdverbsDirection } from './demonstrativeAdverbsDirection'
import { demonstrativeAdverbsPlace } from './demonstrativeAdverbsPlace'
import type { StudyCardItem } from './studyCard'

/** 여기·저기 + 오른쪽·왼쪽·위·아래·앞·뒤 */
export const directionAdverbs: StudyCardItem[] = [
  ...demonstrativeAdverbsPlace,
  ...demonstrativeAdverbsDirection,
]
