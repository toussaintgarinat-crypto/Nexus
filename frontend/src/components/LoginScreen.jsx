import { useState } from 'react'
import { auth } from '../services/api'

const EMOJIS = ['🧑‍💻', '👨‍💻', '👩‍💻', '🦾', '🤖', '🧠', '⚡', '🚀', '🎯', '🔮', '🌟', '🦊', '🐉', '🦋', '🎸']

export default function LoginScreen({ onLogin }) {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [emoji, setEmoji] = useState('🧑‍💻')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'login') {
        const data = await auth.login(email, password)
        onLogin({ id: data.user_id, email: data.email, avatar_emoji: data.avatar_emoji, display_name: data.display_name })
      } else {
        const data = await auth.register({ email, password, avatar_emoji: emoji, display_name: displayName || email.split('@')[0] })
        localStorage.setItem('nexus_token', data.access_token)
        localStorage.setItem('nexus_user', JSON.stringify({ id: data.user_id, email: data.email, avatar_emoji: data.avatar_emoji, display_name: data.display_name }))
        onLogin({ id: data.user_id, email: data.email, avatar_emoji: data.avatar_emoji, display_name: data.display_name })
      }
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-bg">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">⚡</div>
          <h1 className="text-3xl font-bold text-white">Nexus</h1>
          <p className="text-muted mt-1">Ton espace de création — dev, apprend, construis</p>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-8">
          {/* Mode switcher */}
          <div className="flex gap-2 mb-6 bg-panel rounded-lg p-1">
            {['login', 'register'].map(m => (
              <button key={m} onClick={() => setMode(m)}
                className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${mode === m ? 'bg-surface text-white shadow' : 'text-muted hover:text-white'}`}>
                {m === 'login' ? 'Connexion' : 'Créer un compte'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <>
                <div>
                  <label className="block text-sm text-muted mb-2">Ton avatar</label>
                  <div className="flex flex-wrap gap-2">
                    {EMOJIS.map(e => (
                      <button key={e} type="button" onClick={() => setEmoji(e)}
                        className={`w-10 h-10 rounded-lg text-xl transition-all ${emoji === e ? 'bg-purple-600 scale-110' : 'bg-panel hover:bg-border'}`}>
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
                <input
                  type="text" placeholder="Ton nom (optionnel)" value={displayName}
                  onChange={e => setDisplayName(e.target.value)}
                  className="w-full bg-panel border border-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-purple-500 transition-colors"
                />
              </>
            )}

            <input
              type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required
              className="w-full bg-panel border border-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-purple-500 transition-colors"
            />
            <input
              type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} required
              className="w-full bg-panel border border-border rounded-lg px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-purple-500 transition-colors"
            />

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button type="submit" disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50">
              {loading ? '...' : mode === 'login' ? 'Connexion' : 'Créer mon compte'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
