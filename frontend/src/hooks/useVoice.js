import { useState, useRef, useCallback } from 'react'

export function useVoice({ lang = 'fr-FR', onTranscript } = {}) {
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState('')
  const recognitionRef = useRef(null)
  const synthRef = useRef(window.speechSynthesis)

  const startListening = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      alert('Votre navigateur ne supporte pas la reconnaissance vocale. Utilisez Chrome.')
      return
    }
    const recognition = new SpeechRecognition()
    recognition.lang = lang
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onstart = () => setIsListening(true)
    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript
      setTranscript(text)
      onTranscript?.(text)
    }
    recognition.onerror = (e) => { console.error('STT error', e); setIsListening(false) }
    recognition.onend = () => setIsListening(false)

    recognitionRef.current = recognition
    recognition.start()
  }, [lang, onTranscript])

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop()
    setIsListening(false)
  }, [])

  const speak = useCallback((text, voiceName = '') => {
    if (!synthRef.current) return
    synthRef.current.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang
    if (voiceName) {
      const voices = synthRef.current.getVoices()
      const voice = voices.find(v => v.name === voiceName)
      if (voice) utterance.voice = voice
    }
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    synthRef.current.speak(utterance)
  }, [lang])

  const stopSpeaking = useCallback(() => {
    synthRef.current?.cancel()
    setIsSpeaking(false)
  }, [])

  const getVoices = useCallback(() => {
    return synthRef.current?.getVoices() || []
  }, [])

  return { isListening, isSpeaking, transcript, startListening, stopListening, speak, stopSpeaking, getVoices }
}
