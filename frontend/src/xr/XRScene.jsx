import { Canvas } from '@react-three/fiber'
import { Environment, Text, Float, OrbitControls, Html } from '@react-three/drei'
import { XR, createXRStore } from '@react-three/xr'
import { useState, useRef } from 'react'
import AIAssistant from '../components/AIAssistant'

const store = createXRStore()

const WORLD_COLORS = {
  web: '#3B82F6', mobile: '#10B981', ai: '#8B5CF6', backend: '#F59E0B',
  extension: '#EF4444', saas: '#06B6D4', xr: '#F97316', plugin: '#84CC16', custom: '#6B7280',
}

// Floating channel panel in 3D space
function XRChannelPanel({ channel, position, color, isSelected, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <group position={position} onClick={onClick}
        onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
        <mesh>
          <roundedBoxGeometry args={[1.2, 0.4, 0.05, 4, 0.05]} />
          <meshStandardMaterial
            color={isSelected ? color : hovered ? '#2a2a3a' : '#1a1a24'}
            emissive={isSelected ? color : '#000000'}
            emissiveIntensity={isSelected ? 0.3 : 0}
            transparent opacity={0.9}
          />
        </mesh>
        <Text position={[0, 0.05, 0.03]} fontSize={0.08} color={isSelected ? '#ffffff' : '#aaaacc'} anchorX="center">
          ⚡ {channel.name}
        </Text>
        <Text position={[0, -0.08, 0.03]} fontSize={0.05} color="#666688" anchorX="center">
          {channel.category}
        </Text>
      </group>
    </Float>
  )
}

// AI assistant floating panel in XR
function XRAssistantPanel({ channel, world, user, llmConfig }) {
  return (
    <group position={[0, 0, -2]}>
      <mesh>
        <planeGeometry args={[3, 4]} />
        <meshStandardMaterial color="#111118" transparent opacity={0.95} />
      </mesh>
      <Html transform occlude position={[0, 0, 0.01]} style={{ width: '560px', height: '740px', pointerEvents: 'all' }}>
        <div style={{ width: '560px', height: '740px', background: '#111118', borderRadius: '16px', overflow: 'hidden', border: '1px solid #2a2a3a' }}>
          <AIAssistant channel={channel} world={world} user={user} llmConfig={llmConfig}
            accentColor={WORLD_COLORS[world?.type] || '#8B5CF6'} />
        </div>
      </Html>
    </group>
  )
}

// World title floating above
function WorldTitle({ world }) {
  const color = WORLD_COLORS[world?.type] || '#8B5CF6'
  return (
    <group position={[0, 2.5, -1.5]}>
      <Text fontSize={0.3} color={color} anchorX="center" fontWeight="bold">
        {world?.emoji} {world?.name}
      </Text>
    </group>
  )
}

export default function XRScene({ world, channels, onExit, llmConfig, user }) {
  const [selectedChannel, setSelectedChannel] = useState(channels?.[0])
  const [showAssistant, setShowAssistant] = useState(true)

  const color = WORLD_COLORS[world?.type] || '#8B5CF6'

  // Arrange channels in a semicircle
  const getChannelPosition = (index, total) => {
    const angle = (index / Math.max(total - 1, 1)) * Math.PI - Math.PI / 2
    const radius = Math.max(2, total * 0.3)
    return [Math.cos(angle) * radius, -index * 0.5 + (total * 0.25), -1.5]
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#0a0a0f' }}>
      {/* Exit button */}
      <div style={{ position: 'absolute', top: 16, left: 16, zIndex: 100, display: 'flex', gap: 8 }}>
        <button onClick={onExit}
          style={{ padding: '8px 16px', background: '#1a1a24', border: '1px solid #2a2a3a', borderRadius: 8, color: 'white', cursor: 'pointer', fontSize: 14 }}>
          ← Quitter XR
        </button>
        <button onClick={() => store.enterVR()}
          style={{ padding: '8px 16px', background: '#8B5CF6', borderRadius: 8, color: 'white', cursor: 'pointer', fontSize: 14 }}>
          🥽 Entrer en VR
        </button>
        <button onClick={() => store.enterAR()}
          style={{ padding: '8px 16px', background: '#10B981', borderRadius: 8, color: 'white', cursor: 'pointer', fontSize: 14 }}>
          📱 Entrer en AR
        </button>
        <button onClick={() => setShowAssistant(v => !v)}
          style={{ padding: '8px 16px', background: showAssistant ? '#8B5CF6' : '#1a1a24', border: '1px solid #2a2a3a', borderRadius: 8, color: 'white', cursor: 'pointer', fontSize: 14 }}>
          🤖 Assistant
        </button>
      </div>

      {/* Selected channel info */}
      {selectedChannel && (
        <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 100,
          background: '#1a1a24', border: `1px solid ${color}`, borderRadius: 12, padding: '8px 20px', color: 'white', fontSize: 14 }}>
          ⚡ {selectedChannel.name} — {selectedChannel.category}
        </div>
      )}

      <Canvas camera={{ position: [0, 0, 3], fov: 70 }}>
        <XR store={store}>
          <ambientLight intensity={0.4} />
          <pointLight position={[0, 3, 0]} intensity={1} color={color} />
          <Environment preset="night" />

          {/* World title */}
          {world && <WorldTitle world={world} />}

          {/* Channel panels */}
          {channels?.map((ch, i) => (
            <XRChannelPanel
              key={ch.id}
              channel={ch}
              position={getChannelPosition(i, channels.length)}
              color={color}
              isSelected={selectedChannel?.id === ch.id}
              onClick={() => setSelectedChannel(ch)}
            />
          ))}

          {/* AI Assistant panel */}
          {showAssistant && selectedChannel && (
            <XRAssistantPanel channel={selectedChannel} world={world} user={user} llmConfig={llmConfig} />
          )}

          {/* Ground grid */}
          <gridHelper args={[20, 20, '#1a1a2e', '#1a1a2e']} position={[0, -2, 0]} />

          <OrbitControls enableZoom={true} enablePan={false} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 4} />
        </XR>
      </Canvas>
    </div>
  )
}
