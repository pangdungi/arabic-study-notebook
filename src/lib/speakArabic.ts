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

export function speakArabic(text: string) {
  if (!('speechSynthesis' in window)) return false

  const run = () => {
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'ar-SA'

    const voice = getArabicFemaleVoice()
    if (voice) {
      utterance.voice = voice
      utterance.lang = voice.lang
    }

    utterance.rate = 0.9
    window.speechSynthesis.speak(utterance)
  }

  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.addEventListener('voiceschanged', run, { once: true })
    window.speechSynthesis.getVoices()
  } else {
    run()
  }

  return true
}

export function canSpeakArabic() {
  return 'speechSynthesis' in window
}
