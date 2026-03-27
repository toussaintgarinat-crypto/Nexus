import { useState, useCallback, useRef } from 'react'
import { ai } from '../services/api'

const BASE = import.meta.env.VITE_API_URL || ''

const TEACH_KEYWORDS = ['explique', 'comment', 'pourquoi', 'qu\'est-ce', 'c\'est quoi', 'kesako', 'définition', 'différence', 'avantage', 'inconvénient', 'quand utiliser', 'best practice']
const BUILD_KEYWORDS = ['crée', 'génère', 'code', 'fais', 'implémente', 'écris', 'développe', 'ajoute', 'modifie', 'corrige', 'refactorise', 'optimise']

function detectMode(message) {
  const lower = message.toLowerCase()
  const isTeach = TEACH_KEYWORDS.some(k => lower.includes(k))
  const isBuild = BUILD_KEYWORDS.some(k => lower.includes(k))
  if (isBuild && !isTeach) return 'build'
  if (isTeach) return 'teach'
  return 'auto'
}

export function extractMermaid(text) {
  const match = text.match(/```mermaid\n([\s\S]*?)```/)
  return match ? match[1].trim() : null
}

export function useAI({ channelId, llmConfig }) {
  const [history, setHistory] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [lastMode, setLastMode] = useState('auto')
  const lastUserMessageRef = useRef(null)

  const loadHistory = useCallback(async () => {
    if (!channelId) return
    try {
      const data = await ai.history(channelId)
      setHistory(data)
    } catch (e) {
      console.error('Failed to load AI history', e)
    }
  }, [channelId])

  const sendMessage = useCallback(async (message, canvasState = null) => {
    if (!message.trim()) return null
    const mode = detectMode(message)
    setLastMode(mode)
    setIsLoading(true)
    setError(null)
    lastUserMessageRef.current = message

    const userMsg = { role: 'user', content: message, created_at: new Date().toISOString() }
    setHistory(h => [...h, userMsg])

    const payload = {
      channel_id: channelId,
      message,
      provider: llmConfig?.provider || 'offline',
      api_key: llmConfig?.api_key || '',
      model: llmConfig?.model || '',
      canvas_state: canvasState ? JSON.stringify(canvasState) : null,
    }

    // Offline provider: use regular (non-streaming) endpoint
    if (!llmConfig?.provider || llmConfig.provider === 'offline') {
      try {
        const data = await ai.chat(payload)
        const aiMsg = { role: 'assistant', content: data.response, created_at: new Date().toISOString() }
        setHistory(h => [...h, aiMsg])
        return { response: data.response, mermaid: extractMermaid(data.response), mode }
      } catch (e) {
        setError(e.message)
        return null
      } finally {
        setIsLoading(false)
      }
    }

    // Streaming via SSE
    const token = localStorage.getItem('nexus_token')
    // Add a placeholder AI message that we'll fill in progressively
    setHistory(h => [...h, { role: 'assistant', content: '', streaming: true, created_at: new Date().toISOString() }])

    try {
      const res = await fetch(`${BASE}/ai/chat/stream`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: res.statusText }))
        throw new Error(err.detail || 'Erreur réseau')
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let fullText = ''
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() // keep incomplete last line

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const raw = line.slice(6).trim()
          if (raw === '[DONE]') break
          try {
            const parsed = JSON.parse(raw)
            if (parsed.error) throw new Error(parsed.error)
            if (parsed.content) {
              fullText += parsed.content
              setHistory(h => {
                const next = [...h]
                next[next.length - 1] = { role: 'assistant', content: fullText, streaming: true, created_at: next[next.length - 1].created_at }
                return next
              })
            }
          } catch (parseErr) {
            if (parseErr.message !== 'Unexpected end of JSON input') throw parseErr
          }
        }
      }

      // Mark streaming done
      setHistory(h => {
        const next = [...h]
        next[next.length - 1] = { ...next[next.length - 1], streaming: false }
        return next
      })

      return { response: fullText, mermaid: extractMermaid(fullText), mode }
    } catch (e) {
      setError(e.message)
      // Remove the empty placeholder on error
      setHistory(h => h.filter((_, i) => i !== h.length - 1 || h[i].content !== ''))
      return null
    } finally {
      setIsLoading(false)
    }
  }, [channelId, llmConfig])

  const regenerate = useCallback(async (canvasState = null) => {
    const lastMsg = lastUserMessageRef.current
    if (!lastMsg) return null

    // Remove last AI response from UI + DB
    setHistory(h => {
      const next = [...h]
      if (next.length > 0 && next[next.length - 1].role === 'assistant') next.pop()
      return next
    })
    await ai.deleteLastExchange(channelId)

    // Resend
    return sendMessage(lastMsg, canvasState)
  }, [channelId, sendMessage])

  const clearHistory = useCallback(async () => {
    await ai.clearHistory(channelId)
    setHistory([])
    lastUserMessageRef.current = null
  }, [channelId])

  return { history, isLoading, error, lastMode, sendMessage, regenerate, loadHistory, clearHistory, extractMermaid }
}
