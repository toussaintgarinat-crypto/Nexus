import { useState, useEffect, useRef } from 'react'
import { worlds as worldsApi, channels as channelsApi, config as configApi } from '../services/api'
import WorldSidebar from './WorldSidebar'
import ChannelList from './ChannelList'
import ChannelView from './ChannelView'
import CreateWorldModal from './CreateWorldModal'
import SettingsModal from './SettingsModal'

// ─── URL hash helpers ─────────────────────────────────────────────
// Format: #w{worldId}/c{channelId}
function readHash() {
  const hash = window.location.hash.slice(1) // remove #
  const m = hash.match(/w(\d+)(?:\/c(\d+))?/)
  if (!m) return { worldId: null, channelId: null }
  return { worldId: parseInt(m[1]), channelId: m[2] ? parseInt(m[2]) : null }
}

function writeHash(worldId, channelId) {
  const next = worldId
    ? `#w${worldId}${channelId ? `/c${channelId}` : ''}`
    : ''
  if (window.location.hash !== next) {
    window.history.replaceState(null, '', next || window.location.pathname)
  }
}

export default function MainLayout({ user, onLogout }) {
  const [worldsList, setWorldsList] = useState([])
  const [selectedWorld, setSelectedWorld] = useState(null)
  const [channelsList, setChannelsList] = useState([])
  const [selectedChannel, setSelectedChannel] = useState(null)
  const [showCreateWorld, setShowCreateWorld] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [llmConfig, setLlmConfig] = useState({ provider: 'offline', api_key: '', model: '' })
  const [xrMode, setXrMode] = useState(false)
  const restoredRef = useRef(false)

  useEffect(() => {
    loadWorlds()
    loadLLMConfig()
  }, [])

  async function loadWorlds() {
    try {
      const data = await worldsApi.list()
      setWorldsList(data)

      if (data.length === 0) return

      // Try to restore from URL hash on first load
      if (!restoredRef.current) {
        restoredRef.current = true
        const { worldId, channelId } = readHash()
        const targetWorld = worldId ? data.find(w => w.id === worldId) : null

        if (targetWorld) {
          const chData = await channelsApi.list(targetWorld.id)
          setSelectedWorld(targetWorld)
          setChannelsList(chData)
          const targetChannel = channelId ? chData.find(c => c.id === channelId) : chData[0]
          setSelectedChannel(targetChannel || chData[0] || null)
          return
        }
      }

      // Default: select first world if nothing is selected
      if (!selectedWorld) selectWorld(data[0])
    } catch (e) { console.error(e) }
  }

  async function loadLLMConfig() {
    try {
      const data = await configApi.getLLM()
      setLlmConfig(data)
    } catch (e) {}
  }

  async function selectWorld(world) {
    setSelectedWorld(world)
    setSelectedChannel(null)
    try {
      const data = await channelsApi.list(world.id)
      setChannelsList(data)
      const first = data[0] || null
      setSelectedChannel(first)
      writeHash(world.id, first?.id)
    } catch (e) { console.error(e) }
  }

  function selectChannel(channel) {
    setSelectedChannel(channel)
    writeHash(selectedWorld?.id, channel?.id)
  }

  async function handleCreateWorld(worldData) {
    const newWorld = await worldsApi.create(worldData)
    await loadWorlds()
    setShowCreateWorld(false)
    selectWorld(newWorld)
  }

  async function handleCreateChannel(channelData) {
    if (!selectedWorld) return
    await channelsApi.create(selectedWorld.id, channelData)
    const data = await channelsApi.list(selectedWorld.id)
    setChannelsList(data)
  }

  if (xrMode) {
    const XRScene = require('./xr/XRScene').default
    return <XRScene world={selectedWorld} channels={channelsList} onExit={() => setXrMode(false)} llmConfig={llmConfig} user={user} />
  }

  return (
    <div className="flex h-screen overflow-hidden bg-bg">
      <WorldSidebar
        worlds={worldsList}
        selectedWorld={selectedWorld}
        onSelect={selectWorld}
        onCreateWorld={() => setShowCreateWorld(true)}
        onSettings={() => setShowSettings(true)}
        onLogout={onLogout}
        user={user}
        onToggleXR={() => setXrMode(true)}
      />

      {selectedWorld && (
        <ChannelList
          world={selectedWorld}
          channels={channelsList}
          selectedChannel={selectedChannel}
          onSelect={selectChannel}
          onCreateChannel={handleCreateChannel}
        />
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        {selectedChannel ? (
          <ChannelView
            channel={selectedChannel}
            world={selectedWorld}
            user={user}
            llmConfig={llmConfig}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-muted">
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <p className="text-xl font-medium text-white mb-2">Bienvenue dans Nexus</p>
              <p>Sélectionne un canal pour commencer à builder</p>
            </div>
          </div>
        )}
      </div>

      {showCreateWorld && (
        <CreateWorldModal onClose={() => setShowCreateWorld(false)} onCreate={handleCreateWorld} />
      )}
      {showSettings && (
        <SettingsModal onClose={() => setShowSettings(false)} llmConfig={llmConfig} onSaveLLM={setLlmConfig} />
      )}
    </div>
  )
}
