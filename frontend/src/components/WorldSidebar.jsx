const WORLD_COLORS = {
  web: '#3B82F6', mobile: '#10B981', ai: '#8B5CF6', backend: '#F59E0B',
  extension: '#EF4444', saas: '#06B6D4', xr: '#F97316', plugin: '#84CC16', custom: '#6B7280',
}

export default function WorldSidebar({ worlds, selectedWorld, onSelect, onCreateWorld, onSettings, onLogout, user, onToggleXR }) {
  return (
    <div className="w-16 bg-sidebar flex flex-col items-center py-3 gap-2 border-r border-border flex-shrink-0">
      {/* Logo */}
      <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-xl mb-2 flex-shrink-0">⚡</div>
      <div className="w-8 border-t border-border" />

      {/* Worlds */}
      <div className="flex flex-col gap-2 flex-1 overflow-y-auto w-full items-center py-1">
        {worlds.map(w => (
          <WorldIcon key={w.id} world={w} selected={selectedWorld?.id === w.id} onClick={() => onSelect(w)} />
        ))}
      </div>

      <div className="w-8 border-t border-border" />

      {/* Add world */}
      <button onClick={onCreateWorld} title="Créer un monde"
        className="w-10 h-10 bg-panel hover:bg-green-600 rounded-xl flex items-center justify-center text-green-400 hover:text-white transition-all text-xl">
        +
      </button>

      {/* XR toggle */}
      <button onClick={onToggleXR} title="Mode XR"
        className="w-10 h-10 bg-panel hover:bg-purple-600 rounded-xl flex items-center justify-center transition-all text-lg">
        🥽
      </button>

      {/* Settings */}
      <button onClick={onSettings} title="Paramètres"
        className="w-10 h-10 bg-panel hover:bg-border rounded-xl flex items-center justify-center transition-all text-lg">
        ⚙️
      </button>

      {/* User avatar */}
      <button onClick={onLogout} title={`Déconnexion (${user?.email})`}
        className="w-10 h-10 bg-panel hover:bg-red-900 rounded-xl flex items-center justify-center text-xl transition-all">
        {user?.avatar_emoji || '👤'}
      </button>
    </div>
  )
}

function WorldIcon({ world, selected, onClick }) {
  const color = WORLD_COLORS[world.type] || '#6B7280'
  return (
    <button onClick={onClick} title={world.name}
      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all relative flex-shrink-0"
      style={{
        background: selected ? color : '#1a1a24',
        boxShadow: selected ? `0 0 0 2px ${color}` : 'none',
        transform: selected ? 'scale(1.05)' : 'scale(1)',
      }}>
      {world.emoji}
      {selected && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-1 h-6 rounded-r-full"
          style={{ background: color }} />
      )}
    </button>
  )
}
