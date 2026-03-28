import { useState, useEffect, useRef, useCallback } from 'react'
import { messages as messagesApi } from '../services/api'
import AIAssistant from './AIAssistant'
import ExcalidrawPanel from './ExcalidrawPanel'
import CoursesLibrary from './CoursesLibrary'

const WORLD_COLORS = {
  web: '#3B82F6', mobile: '#10B981', ai: '#8B5CF6', backend: '#F59E0B',
  extension: '#EF4444', saas: '#06B6D4', xr: '#F97316', plugin: '#84CC16', custom: '#6B7280',
}

export default function MixedChannel({ channel, world, user, llmConfig }) {
  const [msgs, setMsgs] = useState([])
  const [input, setInput] = useState('')
  const [showCanvas, setShowCanvas] = useState(false)
  const [tab, setTab] = useState('ai')
  const [typingUsers, setTypingUsers] = useState([]) // [{id, display_name, avatar_emoji}]
  const wsRef = useRef(null)
  const bottomRef = useRef(null)
  const typingTimers = useRef({}) // user_id → timeout
  const typingDebounce = useRef(null)

  useEffect(() => {
    loadMessages()
    connectWS()
    return () => wsRef.current?.close()
  }, [channel.id])

  async function loadMessages() {
    try {
      const data = await messagesApi.list(channel.id)
      setMsgs(data)
    } catch (e) {}
  }

  function connectWS() {
    wsRef.current?.close()
    const url = messagesApi.wsUrl(channel.id)
    const ws = new WebSocket(url)

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data)

      if (data.type === 'typing') {
        const u = data.user
        setTypingUsers(prev => {
          if (prev.find(p => p.id === u.id)) return prev
          return [...prev, u]
        })
        // Clear after 3s of no typing signal
        clearTimeout(typingTimers.current[u.id])
        typingTimers.current[u.id] = setTimeout(() => {
          setTypingUsers(prev => prev.filter(p => p.id !== u.id))
        }, 3000)
        return
      }

      // Regular message — clear typing indicator for that user
      if (data.type === 'message' || data.user) {
        setTypingUsers(prev => prev.filter(p => p.id !== data.user?.id))
        clearTimeout(typingTimers.current[data.user?.id])
        setMsgs(prev => [...prev, data])
      }
    }

    ws.onerror = () => {}
    wsRef.current = ws
  }

  function sendTyping() {
    if (wsRef.current?.readyState !== 1) return
    wsRef.current.send(JSON.stringify({ type: 'typing' }))
  }

  function handleInputChange(e) {
    setInput(e.target.value)
    // Debounce typing signals (send at most every 2s)
    clearTimeout(typingDebounce.current)
    typingDebounce.current = setTimeout(sendTyping, 300)
  }

  function sendMessage(e) {
    e.preventDefault()
    if (!input.trim() || wsRef.current?.readyState !== 1) return
    wsRef.current.send(JSON.stringify({ type: 'message', content: input.trim() }))
    setInput('')
    clearTimeout(typingDebounce.current)
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, typingUsers])

  const accentColor = WORLD_COLORS[world?.type] || '#8B5CF6'

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-panel flex-shrink-0">
        <span className="text-muted text-sm">⚡</span>
        <div>
          <span className="font-semibold text-white">{channel.name}</span>
          {channel.description && <span className="text-muted text-xs ml-2">— {channel.description}</span>}
        </div>
        <div className="ml-auto flex gap-2">
          <button onClick={() => setShowCanvas(v => !v)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${showCanvas ? 'bg-purple-600 text-white' : 'bg-surface hover:bg-border text-muted hover:text-white'}`}>
            🎨 Canvas
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left: Tab content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex border-b border-border bg-panel">
            {[['ai', '🤖 Assistant'], ['chat', '💬 Chat'], ['cours', '📚 Cours']].map(([key, label]) => (
              <button key={key} onClick={() => setTab(key)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${tab === key ? 'text-white border-b-2' : 'text-muted hover:text-white'}`}
                style={tab === key ? { borderBottomColor: accentColor } : {}}>
                {label}
              </button>
            ))}
          </div>

          {tab === 'cours' ? (
            <div className="flex-1 overflow-hidden">
              <CoursesLibrary accentColor={accentColor} />
            </div>
          ) : tab === 'ai' ? (
            <AIAssistant channel={channel} world={world} user={user} llmConfig={llmConfig} accentColor={accentColor} />
          ) : (
            <div className="flex flex-col flex-1 overflow-hidden">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {msgs.length === 0 && (
                  <div className="text-center text-muted py-8">Pas encore de messages. Dis quelque chose !</div>
                )}
                {msgs.map((m, i) => (
                  <div key={i} className={`flex gap-3 ${m.user?.id === user?.id ? 'flex-row-reverse' : ''}`}>
                    <span className="text-xl flex-shrink-0">{m.user?.avatar_emoji || '👤'}</span>
                    <div className={`max-w-[70%] ${m.user?.id === user?.id ? 'items-end' : 'items-start'} flex flex-col`}>
                      <span className="text-xs text-muted mb-1">{m.user?.display_name || m.user?.id}</span>
                      <div className={`px-3 py-2 rounded-xl text-sm ${m.user?.id === user?.id ? 'text-white' : 'bg-surface text-text'}`}
                        style={m.user?.id === user?.id ? { background: accentColor } : {}}>
                        {m.content}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {typingUsers.length > 0 && (
                  <div className="flex gap-2 items-center">
                    <div className="flex -space-x-1">
                      {typingUsers.slice(0, 3).map(u => (
                        <span key={u.id} className="text-lg" title={u.display_name}>{u.avatar_emoji}</span>
                      ))}
                    </div>
                    <div className="bg-surface rounded-2xl rounded-tl-sm px-3 py-2 flex gap-1 items-center">
                      {[0, 1, 2].map(i => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
                      ))}
                    </div>
                    <span className="text-xs text-muted">
                      {typingUsers.map(u => u.display_name).join(', ')} {typingUsers.length === 1 ? 'écrit' : 'écrivent'}…
                    </span>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Chat input */}
              <form onSubmit={sendMessage} className="p-3 border-t border-border bg-panel flex gap-2">
                <input value={input} onChange={handleInputChange}
                  placeholder={`Message #${channel.name}`}
                  className="flex-1 bg-surface border border-border rounded-lg px-3 py-2 text-sm text-white placeholder-muted focus:outline-none focus:border-purple-500 transition-colors" />
                <button type="submit" className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm font-medium transition-colors">
                  Envoyer
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Right: Excalidraw canvas */}
        {showCanvas && (
          <div className="w-1/2 border-l border-border flex-shrink-0">
            <ExcalidrawPanel channelId={channel.id} />
          </div>
        )}
      </div>
    </div>
  )
}
