export type PracticeCard = {
  id: string
  arabic: string
  /** TTS 전용(표시는 arabic). 알파벳처럼 한 글자만으로는 읽기가 안 될 때 사용 */
  speechArabic?: string
  korean: string
  pronunciation: string
  hint?: string
}
