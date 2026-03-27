import { useState, useEffect } from 'react'
import { auth } from './services/api'
import LoginScreen from './components/LoginScreen'
import MainLayout from './components/MainLayout'

export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const u = auth.getUser()
    if (u && localStorage.getItem('nexus_token')) {
      setUser(u)
    }
    setLoading(false)
  }, [])

  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-bg">
      <div className="text-4xl animate-spin">⚡</div>
    </div>
  )

  if (!user) return <LoginScreen onLogin={setUser} />

  return <MainLayout user={user} onLogout={() => { auth.logout(); setUser(null) }} />
}
