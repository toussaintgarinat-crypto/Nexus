const BASE = import.meta.env.VITE_API_URL || ''

function getToken() {
  return localStorage.getItem('nexus_token')
}

async function request(path, options = {}) {
  const token = getToken()
  const headers = { 'Content-Type': 'application/json', ...options.headers }
  if (token) headers['Authorization'] = `Bearer ${token}`
  const res = await fetch(`${BASE}${path}`, { ...options, headers })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }))
    throw new Error(err.detail || 'Erreur réseau')
  }
  return res.json()
}

// Auth
export const auth = {
  register: (data) => request('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
  login: async (email, password) => {
    const form = new URLSearchParams({ username: email, password })
    const res = await fetch(`${BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form,
    })
    if (!res.ok) throw new Error('Identifiants incorrects')
    const data = await res.json()
    localStorage.setItem('nexus_token', data.access_token)
    localStorage.setItem('nexus_user', JSON.stringify({ id: data.user_id, email: data.email, avatar_emoji: data.avatar_emoji, display_name: data.display_name }))
    return data
  },
  me: () => request('/auth/me'),
  logout: () => { localStorage.removeItem('nexus_token'); localStorage.removeItem('nexus_user') },
  getUser: () => { const u = localStorage.getItem('nexus_user'); return u ? JSON.parse(u) : null },
}

// Worlds
export const worlds = {
  list: () => request('/worlds/'),
  templates: () => request('/worlds/templates'),
  create: (data) => request('/worlds/', { method: 'POST', body: JSON.stringify(data) }),
  delete: (id) => request(`/worlds/${id}`, { method: 'DELETE' }),
  invite: (id) => request(`/worlds/${id}/invite`, { method: 'POST' }),
  join: (code) => request(`/worlds/join/${code}`, { method: 'POST' }),
}

// Channels
export const channels = {
  list: (worldId) => request(`/channels/world/${worldId}`),
  create: (worldId, data) => request(`/channels/world/${worldId}`, { method: 'POST', body: JSON.stringify(data) }),
  delete: (id) => request(`/channels/${id}`, { method: 'DELETE' }),
}

// Messages
export const messages = {
  list: (channelId) => request(`/messages/${channelId}`),
  wsUrl: (channelId) => {
    const base = import.meta.env.VITE_WS_URL || 'ws://localhost:8000'
    const token = getToken()
    return `${base}/messages/ws/${channelId}?token=${token}`
  },
}

// AI
export const ai = {
  chat: (data) => request('/ai/chat', { method: 'POST', body: JSON.stringify(data) }),
  history: (channelId) => request(`/ai/history/${channelId}`),
  clearHistory: (channelId) => request(`/ai/history/${channelId}`, { method: 'DELETE' }),
  deleteLastExchange: (channelId) => request(`/ai/history/${channelId}/last`, { method: 'DELETE' }),
  getCanvas: (channelId) => request(`/ai/canvas/${channelId}`),
  saveCanvas: (channelId, data) => request(`/ai/canvas/${channelId}`, { method: 'POST', body: JSON.stringify({ data }) }),
  openrouterModels: (apiKey = '') => request(`/ai/openrouter/models?api_key=${encodeURIComponent(apiKey)}`),
  streamUrl: () => `${BASE}/ai/chat/stream`,
}

// Tokens
export const tokens = {
  livekit: (channelId, worldId) => request('/tokens/livekit', { method: 'POST', body: JSON.stringify({ channel_id: channelId, world_id: worldId }) }),
}

// Config
export const config = {
  getLLM: () => request('/config/llm'),
  saveLLM: (data) => request('/config/llm', { method: 'PUT', body: JSON.stringify(data) }),
  getVoice: () => request('/config/voice'),
  saveVoice: (data) => request('/config/voice', { method: 'PUT', body: JSON.stringify(data) }),
}
