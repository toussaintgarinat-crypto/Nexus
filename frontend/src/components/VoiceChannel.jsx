import { useState, useEffect } from 'react'
import { tokens } from '../services/api'
import { LiveKitRoom, VideoConference, ControlBar } from '@livekit/components-react'
import '@livekit/components-styles'

export default function VoiceChannel({ channel, world, user, llmConfig }) {
  const [token, setToken] = useState(null)
  const [livekitUrl, setLivekitUrl] = useState(null)
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState(null)

  async function connect() {
    try {
      const data = await tokens.livekit(channel.id, world.id)
      setToken(data.token)
      setLivekitUrl(data.url)
      setConnected(true)
    } catch (e) {
      setError('Impossible de rejoindre le canal vocal: ' + e.message)
    }
  }

  if (error) return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center text-red-400">
        <p className="text-4xl mb-4">⚠️</p>
        <p>{error}</p>
        <button onClick={() => { setError(null); setConnected(false) }}
          className="mt-4 px-4 py-2 bg-surface hover:bg-border rounded-lg text-sm transition-colors">
          Réessayer
        </button>
      </div>
    </div>
  )

  if (!connected) return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="text-6xl mb-4">🔊</div>
        <h2 className="text-xl font-bold text-white mb-2">#{channel.name}</h2>
        <p className="text-muted mb-6">{channel.description || 'Canal vocal'}</p>
        <button onClick={connect}
          className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-colors">
          Rejoindre le canal vocal
        </button>
      </div>
    </div>
  )

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-panel">
        <span className="text-muted text-sm">🔊</span>
        <span className="font-semibold text-white">{channel.name}</span>
        <button onClick={() => setConnected(false)}
          className="ml-auto px-3 py-1 bg-red-700 hover:bg-red-600 text-white rounded-lg text-sm transition-colors">
          Quitter
        </button>
      </div>
      <div className="flex-1 overflow-hidden">
        <LiveKitRoom token={token} serverUrl={livekitUrl} connect={true}
          style={{ height: '100%', background: '#0f0f13' }}>
          <VideoConference />
        </LiveKitRoom>
      </div>
    </div>
  )
}
