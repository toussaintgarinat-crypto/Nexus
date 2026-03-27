import { useState, useEffect, useRef, useCallback } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { useAI } from '../hooks/useAI'
import { useVoice } from '../hooks/useVoice'

// ─── Quick prompts per channel ───────────────────────────────────
const QUICK_PROMPTS = {
  architecture:     ['Génère un diagramme d\'archi pour une app web', 'Explique le pattern MVC', 'Quelles sont les meilleures pratiques de scalabilité ?'],
  'ui-composants':  ['Crée un composant React réutilisable avec props', 'Explique props vs state', 'Best practices pour un design system'],
  authentification: ['Implémente un système JWT complet', 'Explique OAuth2 vs session', 'Crée un middleware d\'auth sécurisé'],
  'base-de-donnees':['Modélise une base de données pour un blog', 'Explique les index et leur impact', 'Crée une migration SQLAlchemy'],
  deploiement:      ['Crée un Dockerfile optimisé', 'Configure un pipeline GitHub Actions', 'Explique les stratégies de déploiement (blue/green, canary)'],
  'llm-integration':['Intègre l\'API OpenAI avec streaming', 'Explique ce qu\'est le RAG', 'Crée un agent LLM simple'],
  'rag-documents':  ['Explique le chunking et les embeddings', 'Crée un pipeline RAG avec FAISS', 'Quelle base vectorielle choisir ?'],
  general:          ['Qu\'est-ce que les principes SOLID ?', 'Crée une API REST avec FastAPI', 'Explique async/await en Python'],
}

function getQuickPrompts(channelName = '') {
  const name = channelName.toLowerCase()
  for (const [key, prompts] of Object.entries(QUICK_PROMPTS)) {
    if (name.includes(key)) return prompts
  }
  return QUICK_PROMPTS.general
}

// ─── Markdown + syntax highlighting ──────────────────────────────
function renderMarkdown(text) {
  // Code blocks with syntax highlighting
  let result = text.replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) => {
    const trimmed = code.trim()
    let highlighted
    try {
      highlighted = lang && hljs.getLanguage(lang)
        ? hljs.highlight(trimmed, { language: lang }).value
        : hljs.highlightAuto(trimmed).value
    } catch {
      highlighted = trimmed.replace(/</g, '&lt;')
    }
    const escapedCode = trimmed.replace(/</g, '&lt;')
    return `<div class="code-block relative my-2">
      <div class="flex items-center justify-between px-3 py-1 bg-zinc-800 rounded-t-lg border border-zinc-700 border-b-0">
        <span class="text-xs text-zinc-400">${lang || 'code'}</span>
        <button class="copy-code-btn text-xs text-zinc-400 hover:text-white transition-colors" data-code="${escapedCode.replace(/"/g, '&quot;')}">📋 Copier</button>
      </div>
      <pre class="bg-zinc-900 border border-zinc-700 rounded-b-lg p-3 overflow-x-auto text-xs m-0"><code class="hljs language-${lang}">${highlighted}</code></pre>
    </div>`
  })
  // Inline code
  result = result.replace(/`([^`]+)`/g, '<code class="bg-zinc-800 px-1.5 py-0.5 rounded text-purple-300 text-xs">$1</code>')
  // Bold
  result = result.replace(/\*\*(.+?)\*\*/g, '<strong class="text-purple-300">$1</strong>')
  // Newlines
  result = result.replace(/\n/g, '<br/>')
  return result
}

// ─── Slash commands help ──────────────────────────────────────────
const SLASH_COMMANDS = [
  { cmd: '/clear',       desc: 'Effacer l\'historique' },
  { cmd: '/export',      desc: 'Exporter en markdown' },
  { cmd: '/mode build',  desc: 'Passer en mode Construction' },
  { cmd: '/mode teach',  desc: 'Passer en mode Enseignement' },
  { cmd: '/mode auto',   desc: 'Mode Auto (détection)' },
]

// ─── Copy button component ────────────────────────────────────────
function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <button onClick={copy} className="text-xs text-muted hover:text-white transition-colors" title="Copier">
      {copied ? '✅' : '📋'}
    </button>
  )
}

const MODE_LABELS = { teach: '📚 Enseignement', build: '🔨 Construction', auto: '⚡ Auto' }

export default function AIAssistant({ channel, world, user, llmConfig, accentColor, canvasState, onMermaidGenerated }) {
  const [input, setInput] = useState('')
  const [manualMode, setManualMode] = useState(null)
  const [autoSpeak, setAutoSpeak] = useState(false)
  const [canvasJson, setCanvasJson] = useState(canvasState)
  const [slashSuggestions, setSlashSuggestions] = useState([])
  const bottomRef = useRef(null)
  const textareaRef = useRef(null)

  const { history, isLoading, error, lastMode, sendMessage, regenerate, loadHistory, clearHistory } = useAI({
    channelId: channel?.id,
    llmConfig,
  })

  const { isListening, isSpeaking, startListening, stopListening, speak, stopSpeaking } = useVoice({
    onTranscript: (text) => setInput(prev => prev + (prev ? ' ' : '') + text),
  })

  useEffect(() => {
    if (channel?.id) loadHistory()
  }, [channel?.id])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history, isLoading])

  useEffect(() => {
    setCanvasJson(canvasState)
  }, [canvasState])

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current
    if (!ta) return
    ta.style.height = 'auto'
    ta.style.height = Math.min(ta.scrollHeight, 128) + 'px'
  }, [input])

  // Handle copy-code buttons inside markdown (event delegation)
  const msgContainerRef = useRef(null)
  useEffect(() => {
    const el = msgContainerRef.current
    if (!el) return
    function onClick(e) {
      const btn = e.target.closest('.copy-code-btn')
      if (!btn) return
      const code = btn.dataset.code || ''
      navigator.clipboard.writeText(code.replace(/&lt;/g, '<').replace(/&quot;/g, '"'))
      btn.textContent = '✅ Copié'
      setTimeout(() => { btn.textContent = '📋 Copier' }, 1500)
    }
    el.addEventListener('click', onClick)
    return () => el.removeEventListener('click', onClick)
  }, [])

  // Slash command suggestions
  function handleInputChange(e) {
    const val = e.target.value
    setInput(val)
    if (val.startsWith('/') && val.length > 0) {
      const filtered = SLASH_COMMANDS.filter(s => s.cmd.startsWith(val.split(' ')[0]))
      setSlashSuggestions(filtered)
    } else {
      setSlashSuggestions([])
    }
  }

  function applySlashSuggestion(cmd) {
    setInput(cmd + ' ')
    setSlashSuggestions([])
    textareaRef.current?.focus()
  }

  // Execute slash commands
  function trySlashCommand(text) {
    const t = text.trim().toLowerCase()
    if (t === '/clear') { clearHistory(); return true }
    if (t === '/export') { handleExport(); return true }
    if (t === '/mode build') { setManualMode('build'); return true }
    if (t === '/mode teach') { setManualMode('teach'); return true }
    if (t === '/mode auto') { setManualMode(null); return true }
    return false
  }

  async function handleSend(e) {
    e?.preventDefault()
    if (!input.trim() || isLoading) return
    const msg = input.trim()
    setInput('')
    setSlashSuggestions([])

    if (msg.startsWith('/') && trySlashCommand(msg)) return

    const result = await sendMessage(msg, canvasJson)
    if (result) {
      if (autoSpeak) speak(result.response)
      if (result.mermaid && onMermaidGenerated) onMermaidGenerated(result.mermaid)
    }
  }

  async function handleRegenerate() {
    if (isLoading) return
    const result = await regenerate(canvasJson)
    if (result) {
      if (autoSpeak) speak(result.response)
      if (result.mermaid && onMermaidGenerated) onMermaidGenerated(result.mermaid)
    }
  }

  function handleExport() {
    const lines = history.map(m =>
      m.role === 'user' ? `**Vous :** ${m.content}` : `**Assistant :** ${m.content}`
    )
    const md = `# Conversation — #${channel?.name}\n\n${lines.join('\n\n---\n\n')}`
    const blob = new Blob([md], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `nexus-${channel?.name}-${new Date().toISOString().slice(0, 10)}.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() }
    if (e.key === 'Escape') setSlashSuggestions([])
  }

  const currentMode = manualMode || lastMode
  const hasHistory = history.length > 0
  const lastIsAssistant = hasHistory && history[history.length - 1].role === 'assistant'
  const quickPrompts = getQuickPrompts(channel?.name)

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-panel text-xs">
        <span className="text-muted">Mode :</span>
        {Object.entries(MODE_LABELS).map(([m, label]) => (
          <button key={m} onClick={() => setManualMode(m === 'auto' ? null : m)}
            className={`px-2 py-0.5 rounded transition-colors ${currentMode === m ? 'text-white' : 'text-muted hover:text-white'}`}
            style={currentMode === m ? { background: accentColor } : {}}>
            {label}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          {llmConfig?.provider && llmConfig.provider !== 'offline' && (
            <span className="text-zinc-500 truncate max-w-[120px]" title={llmConfig.model || llmConfig.provider}>
              {llmConfig.model ? llmConfig.model.split('/').pop() : llmConfig.provider}
            </span>
          )}
          <button onClick={() => setAutoSpeak(v => !v)}
            className={`px-2 py-0.5 rounded text-xs transition-colors ${autoSpeak ? 'bg-green-700 text-white' : 'bg-surface text-muted hover:text-white'}`}
            title="Lire les réponses à voix haute">🔊</button>
          {hasHistory && (
            <button onClick={handleExport} className="text-muted hover:text-white transition-colors" title="Exporter en markdown">📥</button>
          )}
          <button onClick={clearHistory} className="text-muted hover:text-red-400 transition-colors" title="Effacer l'historique">🗑️</button>
        </div>
      </div>

      {/* Messages */}
      <div ref={msgContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Empty state + quick prompts */}
        {history.length === 0 && !isLoading && (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🤖</div>
            <p className="text-white font-medium mb-1">Assistant #{channel?.name}</p>
            <p className="text-muted text-sm mb-6">Pose une question ou choisis un point de départ :</p>

            <div className="flex flex-wrap gap-2 justify-center max-w-md mx-auto">
              {quickPrompts.map((prompt, i) => (
                <button key={i} onClick={() => { setInput(prompt); textareaRef.current?.focus() }}
                  className="text-xs px-3 py-2 rounded-xl bg-surface border border-border hover:border-purple-500 text-muted hover:text-white transition-all text-left">
                  {prompt}
                </button>
              ))}
            </div>

            {llmConfig?.provider === 'offline' && (
              <div className="mt-6 bg-yellow-900/30 border border-yellow-700/50 rounded-lg px-4 py-2 text-yellow-300 text-xs inline-block">
                ⚠️ Mode hors-ligne — Configure un provider LLM dans Paramètres
              </div>
            )}
          </div>
        )}

        {history.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className="text-2xl flex-shrink-0">{m.role === 'user' ? (user?.avatar_emoji || '👤') : '🤖'}</div>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${m.role === 'user' ? 'rounded-tr-sm text-white' : 'rounded-tl-sm bg-surface text-text'}`}
              style={m.role === 'user' ? { background: accentColor } : {}}>
              {m.role === 'assistant' ? (
                <div className="markdown-content text-sm" dangerouslySetInnerHTML={{ __html: renderMarkdown(m.content) }} />
              ) : (
                <p className="text-sm">{m.content}</p>
              )}
              {m.role === 'assistant' && !m.streaming && (
                <div className="mt-2 flex items-center gap-3">
                  <button onClick={() => isSpeaking ? stopSpeaking() : speak(m.content)}
                    className="text-xs text-muted hover:text-white transition-colors">
                    {isSpeaking ? '⏹' : '🔊'}
                  </button>
                  <CopyButton text={m.content} />
                </div>
              )}
              {m.streaming && (
                <span className="inline-block w-1.5 h-4 bg-purple-400 ml-0.5 animate-pulse rounded-sm" />
              )}
            </div>
          </div>
        ))}

        {isLoading && !history.some(m => m.streaming) && (
          <div className="flex gap-3">
            <div className="text-2xl">🤖</div>
            <div className="bg-surface rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1 items-center h-5">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-2 h-2 rounded-full bg-muted animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
                ))}
              </div>
            </div>
          </div>
        )}

        {error && <div className="text-red-400 text-sm px-4 py-2 bg-red-900/20 rounded-lg">Erreur : {error}</div>}
        <div ref={bottomRef} />
      </div>

      {/* Regenerate bar */}
      {lastIsAssistant && !isLoading && (
        <div className="px-3 py-1.5 border-t border-border bg-panel flex justify-center">
          <button onClick={handleRegenerate} className="text-xs text-muted hover:text-white transition-colors flex items-center gap-1">
            🔄 Régénérer la réponse
          </button>
        </div>
      )}

      {/* Slash suggestions */}
      {slashSuggestions.length > 0 && (
        <div className="mx-3 mb-1 bg-surface border border-border rounded-xl overflow-hidden shadow-lg">
          {slashSuggestions.map(s => (
            <button key={s.cmd} onClick={() => applySlashSuggestion(s.cmd)}
              className="w-full flex items-center gap-3 px-3 py-2 hover:bg-panel text-left transition-colors border-b border-border last:border-0">
              <span className="text-purple-400 text-xs font-mono">{s.cmd}</span>
              <span className="text-muted text-xs">{s.desc}</span>
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="p-3 border-t border-border bg-panel">
        <form onSubmit={handleSend} className="flex gap-2 items-end">
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Demande-moi quelque chose... (/ pour commandes)"
              rows={1}
              style={{ resize: 'none', overflow: 'hidden' }}
              className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-purple-500 transition-colors min-h-[44px] max-h-32"
            />
          </div>

          <button type="button" onMouseDown={startListening} onMouseUp={stopListening} onTouchStart={startListening} onTouchEnd={stopListening}
            className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${isListening ? 'pulse-ring bg-red-600' : 'bg-surface hover:bg-border'}`}
            title="Maintenir pour parler">
            🎤
          </button>

          <button type="submit" disabled={isLoading || !input.trim()}
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all flex-shrink-0 disabled:opacity-40"
            style={{ background: accentColor }}>
            {isLoading ? '⏳' : '↑'}
          </button>
        </form>
      </div>
    </div>
  )
}
