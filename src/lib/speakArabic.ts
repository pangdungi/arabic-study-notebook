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
  return window.speechSynthesis.getVoices().filter((voice) => voice.lang.startsWith('ar'))
}

function getArabicFemaleVoice() {
  const arabicVoices = getArabicVoices()
  if (arabicVoices.length === 0) return null

  const femaleVoices = arabicVoices.filter(
    (voice) => isFemaleArabicVoice(voice.name) && !isMaleArabicVoice(voice.name),
  )
  if (femaleVoices.length > 0) {
    return (
      femaleVoices.find((voice) => voice.lang.startsWith('ar-SA')) ??
      femaleVoices.find((voice) => voice.lang.startsWith('ar-EG')) ??
      femaleVoices[0]
    )
  }

  const notMaleVoices = arabicVoices.filter((voice) => !isMaleArabicVoice(voice.name))
  if (notMaleVoices.length > 0) {
    return (
      notMaleVoices.find((voice) => voice.lang.startsWith('ar-SA')) ??
      notMaleVoices.find((voice) => voice.lang.startsWith('ar-EG')) ??
      notMaleVoices[0]
    )
  }

  return arabicVoices[0]
}

export function sanitizeArabicSpeechText(text: string): string {
  const withoutArrow = text.includes('→') ? (text.split('→').pop()?.trim() ?? text) : text
  return withoutArrow.replace(/[…?؟]/g, '').trim()
}

export function preloadArabicVoices() {
  if (!('speechSynthesis' in window)) return

  window.speechSynthesis.getVoices()
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    window.speechSynthesis.getVoices()
  })
}

export function speakArabic(text: string) {
  if (!('speechSynthesis' in window)) return false

  const cleaned = sanitizeArabicSpeechText(text)
  if (!cleaned) return false

  // Chrome sometimes pauses synthesis until resumed.
  window.speechSynthesis.resume()

  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(cleaned)
  utterance.lang = 'ar-SA'

  const voice = getArabicFemaleVoice()
  if (voice) {
    utterance.voice = voice
    utterance.lang = voice.lang
  }

  utterance.rate = 0.9
  // Must run synchronously inside the click handler, not in voiceschanged.
  window.speechSynthesis.speak(utterance)

  return true
}

export function canSpeakArabic() {
  return 'speechSynthesis' in window
}

if (typeof window !== 'undefined') {
  preloadArabicVoices()
}
