import { useState, useEffect } from 'react'
import { config as configApi, ai as aiApi } from '../services/api'

const LLM_PROVIDERS = [
  { id: 'offline', name: 'Hors-ligne', desc: 'Pas d\'IA réelle, gratuit', free: true },
  { id: 'groq', name: 'Groq', desc: 'Rapide et gratuit avec compte', free: true },
  { id: 'gemini', name: 'Google Gemini', desc: 'Gratuit avec compte Google', free: true },
  { id: 'openai', name: 'OpenAI', desc: 'GPT-4o, payant', free: false },
  { id: 'mistral', name: 'Mistral AI', desc: 'Modèles français, payant', free: false },
  { id: 'openrouter', name: 'OpenRouter', desc: 'Accès à +200 modèles (dont gratuits)', free: true },
  { id: 'ollama', name: 'Ollama (local)', desc: 'LLM local sur ta machine', free: true },
]

const STT_PROVIDERS = [
  { id: 'webspeech', name: 'Web Speech API', desc: 'Natif navigateur, gratuit' },
  { id: 'groq', name: 'Groq Whisper', desc: 'Rapide et précis, gratuit' },
  { id: 'openai', name: 'OpenAI Whisper', desc: 'Très précis, payant' },
]

const TTS_PROVIDERS = [
  { id: 'webspeech', name: 'Web Speech API', desc: 'Natif navigateur, gratuit' },
  { id: 'elevenlabs', name: 'ElevenLabs', desc: 'Voix naturelle, payant' },
  { id: 'openai', name: 'OpenAI TTS', desc: 'Bonne qualité, payant' },
]

export default function SettingsModal({ onClose, llmConfig, onSaveLLM }) {
  const [tab, setTab] = useState('llm')
  const [llm, setLlm] = useState(llmConfig || { provider: 'offline', api_key: '', model: '' })
  const [voice, setVoice] = useState({ stt_provider: 'webspeech', tts_provider: 'webspeech', stt_api_key: '', tts_api_key: '', tts_voice: '' })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [orModels, setOrModels] = useState([])
  const [orLoading, setOrLoading] = useState(false)
  const [orError, setOrError] = useState('')
  const [orSearch, setOrSearch] = useState('')

  useEffect(() => {
    configApi.getVoice().then(setVoice).catch(() => {})
  }, [])

  async function saveLLM() {
    setSaving(true)
    try {
      await configApi.saveLLM(llm)
      onSaveLLM(llm)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } finally {
      setSaving(false)
    }
  }

  async function loadOpenRouterModels() {
    setOrLoading(true)
    setOrError('')
    try {
      const data = await aiApi.openrouterModels(llm.api_key)
      setOrModels(data.models)
    } catch (e) {
      setOrError(e.message)
    } finally {
      setOrLoading(false)
    }
  }

  async function saveVoice() {
    setSaving(true)
    try {
      await configApi.saveVoice(voice)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } finally {
      setSaving(false)
    }
  }

  const TABS = [['llm', '🤖 LLM'], ['voice', '🎤 Voix']]

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-surface border border-border rounded-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-white">Paramètres</h2>
          <button onClick={onClose} className="text-muted hover:text-white text-2xl">✕</button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border bg-panel">
          {TABS.map(([key, label]) => (
            <button key={key} onClick={() => setTab(key)}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${tab === key ? 'text-white border-b-2 border-purple-500' : 'text-muted hover:text-white'}`}>
              {label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {tab === 'llm' && (
            <>
              <div>
                <label className="block text-sm text-muted mb-3">Provider IA</label>
                <div className="space-y-2">
                  {LLM_PROVIDERS.map(p => (
                    <button key={p.id} onClick={() => setLlm(l => ({ ...l, provider: p.id }))}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${llm.provider === p.id ? 'border-purple-500 bg-purple-900/20' : 'border-border bg-panel hover:border-border hover:bg-surface'}`}>
                      <div className="flex-1">
                        <div className="font-medium text-white text-sm">{p.name}</div>
                        <div className="text-muted text-xs">{p.desc}</div>
                      </div>
                      {p.free && <span className="text-xs bg-green-900 text-green-300 px-2 py-0.5 rounded-full">Gratuit</span>}
                      {llm.provider === p.id && <span className="text-purple-400">✓</span>}
                    </button>
                  ))}
                </div>
              </div>

              {llm.provider !== 'offline' && (
                <>
                  {llm.provider !== 'ollama' && (
                    <div>
                      <label className="block text-sm text-muted mb-2">Clé API</label>
                      <input type="password" value={llm.api_key} onChange={e => setLlm(l => ({ ...l, api_key: e.target.value }))}
                        placeholder="sk-..." className="w-full bg-panel border border-border rounded-lg px-3 py-2 text-white placeholder-muted focus:outline-none focus:border-purple-500 text-sm" />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm text-muted mb-2">Modèle (optionnel)</label>
                    <input value={llm.model} onChange={e => setLlm(l => ({ ...l, model: e.target.value }))}
                      placeholder="Laisser vide pour le défaut" className="w-full bg-panel border border-border rounded-lg px-3 py-2 text-white placeholder-muted focus:outline-none focus:border-purple-500 text-sm" />
                  </div>

                  {llm.provider === 'openrouter' && (
                    <div className="space-y-2">
                      <button onClick={loadOpenRouterModels} disabled={orLoading}
                        className="w-full py-2 bg-panel border border-border hover:border-purple-500 text-white text-sm rounded-lg transition-colors disabled:opacity-50">
                        {orLoading ? '⏳ Chargement...' : '🔍 Parcourir les modèles gratuits'}
                      </button>

                      {orError && <p className="text-red-400 text-xs">{orError}</p>}

                      {orModels.length > 0 && (
                        <div className="border border-border rounded-xl overflow-hidden">
                          <div className="p-2 bg-panel border-b border-border">
                            <input value={orSearch} onChange={e => setOrSearch(e.target.value)}
                              placeholder="Filtrer les modèles..." className="w-full bg-surface rounded-lg px-3 py-1.5 text-white placeholder-muted text-xs focus:outline-none focus:border-purple-500 border border-border" />
                          </div>
                          <div className="max-h-48 overflow-y-auto">
                            {orModels
                              .filter(m => m.name.toLowerCase().includes(orSearch.toLowerCase()) || m.id.toLowerCase().includes(orSearch.toLowerCase()))
                              .map(m => (
                                <button key={m.id} onClick={() => { setLlm(l => ({ ...l, model: m.id })); setOrSearch('') }}
                                  className={`w-full text-left px-3 py-2 hover:bg-purple-900/20 border-b border-border last:border-0 transition-colors ${llm.model === m.id ? 'bg-purple-900/30' : ''}`}>
                                  <div className="text-white text-xs font-medium truncate">{m.name}</div>
                                  <div className="text-muted text-xs truncate">{m.id}</div>
                                  {m.context_length > 0 && <div className="text-green-400 text-xs">{(m.context_length / 1000).toFixed(0)}k ctx</div>}
                                </button>
                              ))
                            }
                          </div>
                          <div className="px-3 py-1.5 bg-panel text-muted text-xs border-t border-border">
                            {orModels.filter(m => m.name.toLowerCase().includes(orSearch.toLowerCase()) || m.id.toLowerCase().includes(orSearch.toLowerCase())).length} modèle(s) gratuit(s)
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}

              <button onClick={saveLLM} disabled={saving}
                className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors disabled:opacity-50">
                {saved ? '✅ Sauvegardé' : saving ? 'Sauvegarde...' : 'Sauvegarder'}
              </button>
            </>
          )}

          {tab === 'voice' && (
            <>
              <div>
                <label className="block text-sm text-muted mb-3">Reconnaissance vocale (STT)</label>
                <div className="space-y-2">
                  {STT_PROVIDERS.map(p => (
                    <button key={p.id} onClick={() => setVoice(v => ({ ...v, stt_provider: p.id }))}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${voice.stt_provider === p.id ? 'border-purple-500 bg-purple-900/20' : 'border-border bg-panel'}`}>
                      <div className="flex-1">
                        <div className="font-medium text-white text-sm">{p.name}</div>
                        <div className="text-muted text-xs">{p.desc}</div>
                      </div>
                      {voice.stt_provider === p.id && <span className="text-purple-400">✓</span>}
                    </button>
                  ))}
                </div>
                {voice.stt_provider !== 'webspeech' && (
                  <input type="password" value={voice.stt_api_key} onChange={e => setVoice(v => ({ ...v, stt_api_key: e.target.value }))}
                    placeholder="Clé API STT" className="mt-2 w-full bg-panel border border-border rounded-lg px-3 py-2 text-white placeholder-muted focus:outline-none focus:border-purple-500 text-sm" />
                )}
              </div>

              <div>
                <label className="block text-sm text-muted mb-3">Synthèse vocale (TTS)</label>
                <div className="space-y-2">
                  {TTS_PROVIDERS.map(p => (
                    <button key={p.id} onClick={() => setVoice(v => ({ ...v, tts_provider: p.id }))}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${voice.tts_provider === p.id ? 'border-purple-500 bg-purple-900/20' : 'border-border bg-panel'}`}>
                      <div className="flex-1">
                        <div className="font-medium text-white text-sm">{p.name}</div>
                        <div className="text-muted text-xs">{p.desc}</div>
                      </div>
                      {voice.tts_provider === p.id && <span className="text-purple-400">✓</span>}
                    </button>
                  ))}
                </div>
                {voice.tts_provider !== 'webspeech' && (
                  <input type="password" value={voice.tts_api_key} onChange={e => setVoice(v => ({ ...v, tts_api_key: e.target.value }))}
                    placeholder="Clé API TTS" className="mt-2 w-full bg-panel border border-border rounded-lg px-3 py-2 text-white placeholder-muted focus:outline-none focus:border-purple-500 text-sm" />
                )}
              </div>

              <button onClick={saveVoice} disabled={saving}
                className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors disabled:opacity-50">
                {saved ? '✅ Sauvegardé' : saving ? 'Sauvegarde...' : 'Sauvegarder'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
