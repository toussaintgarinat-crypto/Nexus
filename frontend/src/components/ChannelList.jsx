import { useState } from 'react'

const TYPE_ICONS = { text: '#', voice: '🔊', mixed: '⚡' }

const WORLD_COLORS = {
  web: '#3B82F6', mobile: '#10B981', ai: '#8B5CF6', backend: '#F59E0B',
  extension: '#EF4444', saas: '#06B6D4', xr: '#F97316', plugin: '#84CC16', custom: '#6B7280',
}

export default function ChannelList({ world, channels, selectedChannel, onSelect, onCreateChannel }) {
  const [showAdd, setShowAdd] = useState(false)
  const [newName, setNewName] = useState('')
  const [newType, setNewType] = useState('mixed')
  const [newCategory, setNewCategory] = useState('Général')

  const accentColor = WORLD_COLORS[world?.type] || '#6B7280'

  // Group by category
  const grouped = channels.reduce((acc, ch) => {
    const cat = ch.category || 'Général'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(ch)
    return acc
  }, {})

  async function handleAdd(e) {
    e.preventDefault()
    if (!newName.trim()) return
    await onCreateChannel({ name: newName.trim(), type: newType, category: newCategory })
    setNewName('')
    setShowAdd(false)
  }

  return (
    <div className="w-56 bg-panel flex flex-col border-r border-border flex-shrink-0">
      {/* World header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{world?.emoji}</span>
          <div>
            <div className="font-semibold text-white text-sm">{world?.name}</div>
            <div className="text-xs text-muted capitalize">{world?.type}</div>
          </div>
        </div>
      </div>

      {/* Channels */}
      <div className="flex-1 overflow-y-auto py-2">
        {Object.entries(grouped).map(([category, chs]) => (
          <div key={category} className="mb-3">
            <div className="px-4 py-1 text-xs font-semibold text-muted uppercase tracking-wider">
              {category}
            </div>
            {chs.map(ch => (
              <button key={ch.id} onClick={() => onSelect(ch)}
                className={`w-full flex items-center gap-2 px-3 py-1.5 mx-1 rounded-md text-sm transition-all text-left ${
                  selectedChannel?.id === ch.id
                    ? 'text-white font-medium'
                    : 'text-muted hover:text-white hover:bg-surface'
                }`}
                style={selectedChannel?.id === ch.id ? { background: `${accentColor}20`, color: 'white' } : {}}>
                <span className="text-xs w-4 flex-shrink-0 opacity-60">
                  {TYPE_ICONS[ch.type] || '#'}
                </span>
                <span className="truncate">{ch.name}</span>
              </button>
            ))}
          </div>
        ))}

        {/* Add channel */}
        {showAdd ? (
          <form onSubmit={handleAdd} className="px-3 py-2 space-y-2">
            <input autoFocus value={newName} onChange={e => setNewName(e.target.value)}
              placeholder="nom-du-canal" className="w-full bg-surface border border-border rounded px-2 py-1 text-sm text-white placeholder-muted focus:outline-none focus:border-purple-500" />
            <input value={newCategory} onChange={e => setNewCategory(e.target.value)}
              placeholder="Catégorie" className="w-full bg-surface border border-border rounded px-2 py-1 text-sm text-white placeholder-muted focus:outline-none focus:border-purple-500" />
            <select value={newType} onChange={e => setNewType(e.target.value)}
              className="w-full bg-surface border border-border rounded px-2 py-1 text-sm text-white focus:outline-none">
              <option value="mixed">⚡ Mixte</option>
              <option value="text"># Texte</option>
              <option value="voice">🔊 Vocal</option>
            </select>
            <div className="flex gap-1">
              <button type="submit" className="flex-1 bg-purple-600 hover:bg-purple-500 text-white text-xs py-1 rounded transition-colors">Créer</button>
              <button type="button" onClick={() => setShowAdd(false)} className="flex-1 bg-surface hover:bg-border text-muted text-xs py-1 rounded transition-colors">Annuler</button>
            </div>
          </form>
        ) : (
          <button onClick={() => setShowAdd(true)}
            className="w-full flex items-center gap-2 px-4 py-1.5 text-sm text-muted hover:text-white transition-colors">
            <span>+</span> Ajouter un canal
          </button>
        )}
      </div>
    </div>
  )
}
