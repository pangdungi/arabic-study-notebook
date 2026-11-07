const FEMALE_ARABIC_VOICE_HINTS = [
  'female',
  'hoda',
  'mariam',
  'laila',
  'layla',
  'amira',
  'zariyah',
  'salma',
  'yasmin',
  'nour',
]

const MALE_ARABIC_VOICE_HINTS = ['male', 'maged', 'naayf', 'tarik', 'moaz', 'omar']

let preferredArabicVoice: SpeechSynthesisVoice | null = null
let speechUnlockHooked = false

function normalizeVoiceName(name: string) {
  return name.toLowerCase()
}

function isFemaleArabicVoice(name: string) {
  const normalized = normalizeVoiceName(name)
  return FEMALE_ARABIC_VOICE_HINTS.some((hint) => normalized.includes(hint))
}

function isMaleArabicVoice(name: string) {
  const normalized = normalizeVoiceName(name)
  return MALE_ARABIC_VOICE_HINTS.some((hint) => normalized.includes(hint))
}

function getArabicVoices() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return []
  return window.speechSynthesis
    .getVoices()
    .filter((voice) => voice.lang.toLowerCase().startsWith('ar'))
}

function pickFromPool(pool: SpeechSynthesisVoice[]) {
  if (pool.length === 0) return null

  const preferLocal = (voices: SpeechSynthesisVoice[]) =>
    voices.find((voice) => voice.localService) ?? voices[0]

  return (
    preferLocal(pool.filter((voice) => voice.lang.toLowerCase().startsWith('ar-sa'))) ??
    preferLocal(pool.filter((voice) => voice.lang.toLowerCase().startsWith('ar-eg'))) ??
    preferLocal(pool)
  )
}

function getArabicFemaleVoice() {
  const arabicVoices = getArabicVoices()
  if (arabicVoices.length === 0) return null

  const femaleVoices = arabicVoices.filter(
    (voice) => isFemaleArabicVoice(voice.name) && !isMaleArabicVoice(voice.name),
  )
  const femalePick = pickFromPool(femaleVoices)
  if (femalePick) return femalePick

  const notMaleVoices = arabicVoices.filter((voice) => !isMaleArabicVoice(voice.name))
  const neutralPick = pickFromPool(notMaleVoices)
  if (neutralPick) return neutralPick

  return pickFromPool(arabicVoices)
}

function refreshPreferredArabicVoice() {
  preferredArabicVoice = getArabicFemaleVoice()
}

export function sanitizeArabicSpeechText(text: string): string {
  const withoutArrow = text.includes('→') ? (text.split('→').pop()?.trim() ?? text) : text
  // 괄호 안 한글 설명(예: 와우(와위우))은 TTS에서 제외
  const withoutParenHint = withoutArrow.replace(/\s*\([^)]*\)\s*/g, ' ').trim()
  return withoutParenHint.replace(/[…?؟]/g, '').trim()
}

function hookSpeechUnlock() {
  if (speechUnlockHooked || typeof document === 'undefined') return
  speechUnlockHooked = true

  const unlock = () => {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.resume()
    refreshPreferredArabicVoice()
  }

  document.addEventListener('pointerdown', unlock, { capture: true, passive: true })
  document.addEventListener('touchstart', unlock, { capture: true, passive: true })
}

export function preloadArabicVoices() {
  if (!('speechSynthesis' in window)) return

  hookSpeechUnlock()
  window.speechSynthesis.getVoices()
  refreshPreferredArabicVoice()

  window.speechSynthesis.addEventListener('voiceschanged', () => {
    window.speechSynthesis.getVoices()
    refreshPreferredArabicVoice()
  })
}

/** 클릭 직전에 호출 — Safari 등에서 음성 목록이 늦게 채워질 때 대비 */
export function primeArabicSpeech() {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.resume()
  window.speechSynthesis.getVoices()
  if (!preferredArabicVoice) refreshPreferredArabicVoice()
}

export function speakArabic(text: string) {
  if (!('speechSynthesis' in window)) return false

  const cleaned = sanitizeArabicSpeechText(text)
  if (!cleaned) return false

  primeArabicSpeech()

  const synth = window.speechSynthesis
  const voice = preferredArabicVoice ?? getArabicFemaleVoice()

  const utterance = new SpeechSynthesisUtterance(cleaned)
  utterance.lang = 'ar-SA'
  utterance.rate = 0.92

  if (voice) {
    utterance.voice = voice
    utterance.lang = voice.lang || 'ar-SA'
  }

  // 재생 중이 아닐 때 cancel()을 호출하면 Safari 등에서 이후 speak가 씹히는 경우가 있음
  if (synth.speaking || synth.pending) {
    synth.cancel()
  }

  // iOS Safari는 speak를 클릭 핸들러 안에서 동기 호출해야 함
  synth.speak(utterance)

  return true
}

export function canSpeakArabic() {
  return 'speechSynthesis' in window
}

export function hasArabicSpeechVoice() {
  return getArabicVoices().length > 0
}

if (typeof window !== 'undefined') {
  preloadArabicVoices()
}
