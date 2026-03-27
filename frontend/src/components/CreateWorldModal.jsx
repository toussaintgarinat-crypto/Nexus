import { useState, useEffect } from 'react'
import { worlds as worldsApi } from '../services/api'

const WORLD_TYPES = [
  { type: 'web', emoji: '🌐', name: 'Web App', desc: 'React, Vue, Next.js...', color: '#3B82F6' },
  { type: 'mobile', emoji: '📱', name: 'App Mobile', desc: 'React Native, Flutter...', color: '#10B981' },
  { type: 'ai', emoji: '🤖', name: 'Outil IA', desc: 'Agents, RAG, chatbots...', color: '#8B5CF6' },
  { type: 'backend', emoji: '⚙️', name: 'Backend / API', desc: 'FastAPI, Node, BDD...', color: '#F59E0B' },
  { type: 'extension', emoji: '🧩', name: 'Extension', desc: 'Chrome, Firefox...', color: '#EF4444' },
  { type: 'saas', emoji: '🛒', name: 'SaaS', desc: 'Auth, paiement, dashboard...', color: '#06B6D4' },
  { type: 'xr', emoji: '🎮', name: 'Jeu / XR', desc: 'WebXR, Three.js...', color: '#F97316' },
  { type: 'plugin', emoji: '🔌', name: 'Plugin Logiciel', desc: 'AutoCAD, Figma, Blender...', color: '#84CC16' },
  { type: 'custom', emoji: '✨', name: 'Personnalisé', desc: 'Ton propre monde...', color: '#6B7280' },
]

export default function CreateWorldModal({ onClose, onCreate }) {
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState(null)
  const [name, setName] = useState('')
  const [emoji, setEmoji] = useState('')
  const [description, setDescription] = useState('')
  const [template, setTemplate] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (selectedType) {
      const t = WORLD_TYPES.find(t => t.type === selectedType)
      if (t) { setEmoji(t.emoji); setName(t.name) }
      worldsApi.templates().then(data => setTemplate(data[selectedType])).catch(() => {})
    }
  }, [selectedType])

  async function handleCreate() {
    setLoading(true)
    try {
      await onCreate({ name, emoji, description, type: selectedType || 'custom', use_template: true })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-surface border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-bold text-white">Créer un nouveau monde</h2>
            <p className="text-muted text-sm mt-1">Étape {step} sur {selectedType === 'custom' ? 2 : 3}</p>
          </div>
          <button onClick={onClose} className="text-muted hover:text-white text-2xl transition-colors">✕</button>
        </div>

        <div className="p-6">
          {/* Step 1: Type */}
          {step === 1 && (
            <div>
              <h3 className="font-semibold text-white mb-4">Quel type d'outil veux-tu construire ?</h3>
              <div className="grid grid-cols-3 gap-3">
                {WORLD_TYPES.map(t => (
                  <button key={t.type} onClick={() => { setSelectedType(t.type); setStep(2) }}
                    className="p-4 bg-panel hover:bg-border rounded-xl text-left transition-all border-2 border-transparent hover:border-purple-600 group">
                    <div className="text-3xl mb-2">{t.emoji}</div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-muted text-xs mt-1">{t.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Customize */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-white mb-4">Personnalise ton monde</h3>
              <div>
                <label className="block text-sm text-muted mb-2">Emoji</label>
                <input value={emoji} onChange={e => setEmoji(e.target.value)}
                  className="w-20 bg-panel border border-border rounded-lg px-3 py-2 text-center text-2xl focus:outline-none focus:border-purple-500" />
              </div>
              <div>
                <label className="block text-sm text-muted mb-2">Nom du monde</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Mon super projet"
                  className="w-full bg-panel border border-border rounded-lg px-3 py-2 text-white placeholder-muted focus:outline-none focus:border-purple-500" />
              </div>
              <div>
                <label className="block text-sm text-muted mb-2">Description (optionnel)</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} rows={2}
                  placeholder="Ce monde est dédié à..."
                  className="w-full bg-panel border border-border rounded-lg px-3 py-2 text-white placeholder-muted focus:outline-none focus:border-purple-500 resize-none" />
              </div>

              {template && selectedType !== 'custom' && (
                <div>
                  <label className="block text-sm text-muted mb-2">Canaux créés automatiquement</label>
                  <div className="bg-panel rounded-lg p-3 space-y-1 max-h-48 overflow-y-auto">
                    {template.channels.map((ch, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted">
                        <span>⚡</span><span className="text-white">{ch.name}</span>
                        <span className="text-xs opacity-60">— {ch.category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button onClick={() => setStep(1)} className="flex-1 py-2 bg-panel hover:bg-border rounded-lg text-sm text-muted transition-colors">
                  ← Retour
                </button>
                <button onClick={handleCreate} disabled={!name.trim() || loading}
                  className="flex-1 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg text-sm transition-colors disabled:opacity-50">
                  {loading ? 'Création...' : '✨ Créer le monde'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
