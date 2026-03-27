import { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react'
import { ai as aiApi } from '../services/api'

// Lazy load Excalidraw to avoid SSR issues
const ExcalidrawComponent = lazy(() =>
  import('@excalidraw/excalidraw').then(m => ({ default: m.Excalidraw }))
)

export default function ExcalidrawPanel({ channelId, onCanvasChange }) {
  const [elements, setElements] = useState([])
  const [appState, setAppState] = useState({})
  const [loading, setLoading] = useState(true)
  const [mermaidInput, setMermaidInput] = useState('')
  const [showMermaid, setShowMermaid] = useState(false)
  const saveTimeoutRef = useRef(null)
  const excalidrawApiRef = useRef(null)

  useEffect(() => {
    loadCanvas()
  }, [channelId])

  async function loadCanvas() {
    setLoading(true)
    try {
      const data = await aiApi.getCanvas(channelId)
      if (data.data && data.data !== '{}') {
        const parsed = JSON.parse(data.data)
        if (parsed.elements) setElements(parsed.elements)
        if (parsed.appState) setAppState(parsed.appState)
      }
    } catch (e) {}
    setLoading(false)
  }

  const handleChange = useCallback((elems, state) => {
    setElements(elems)
    const canvasData = { elements: elems, appState: state }
    onCanvasChange?.(canvasData)

    // Debounced save
    clearTimeout(saveTimeoutRef.current)
    saveTimeoutRef.current = setTimeout(() => {
      aiApi.saveCanvas(channelId, JSON.stringify(canvasData)).catch(() => {})
    }, 2000)
  }, [channelId, onCanvasChange])

  async function convertMermaid() {
    if (!mermaidInput.trim()) return
    try {
      const { parseMermaidToExcalidraw } = await import('@excalidraw/mermaid-to-excalidraw')
      const { elements: newElements } = await parseMermaidToExcalidraw(mermaidInput)
      if (excalidrawApiRef.current) {
        excalidrawApiRef.current.updateScene({ elements: [...elements, ...newElements] })
      }
      setMermaidInput('')
      setShowMermaid(false)
    } catch (e) {
      alert('Erreur lors de la conversion Mermaid: ' + e.message)
    }
  }

  function shareWithAssistant() {
    const canvasData = { elements, appState }
    onCanvasChange?.(canvasData)
    // Visual feedback
    const btn = document.getElementById('share-btn')
    if (btn) { btn.textContent = '✅ Partagé !'; setTimeout(() => btn.textContent = '🤖 Partager avec l\'assistant', 1500) }
  }

  if (loading) return <div className="flex items-center justify-center h-full text-muted">Chargement du canvas...</div>

  return (
    <div className="flex flex-col h-full bg-bg">
      {/* Canvas toolbar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-panel flex-shrink-0 flex-wrap">
        <span className="text-sm font-medium text-white">🎨 Canvas collaboratif</span>
        <button onClick={() => setShowMermaid(v => !v)}
          className="px-2 py-1 bg-surface hover:bg-border rounded text-xs text-muted hover:text-white transition-colors">
          📊 Générer depuis Mermaid
        </button>
        <button id="share-btn" onClick={shareWithAssistant}
          className="px-2 py-1 bg-purple-700 hover:bg-purple-600 rounded text-xs text-white transition-colors">
          🤖 Partager avec l'assistant
        </button>
      </div>

      {/* Mermaid input */}
      {showMermaid && (
        <div className="p-3 border-b border-border bg-panel">
          <textarea value={mermaidInput} onChange={e => setMermaidInput(e.target.value)}
            placeholder={`flowchart TD\n  A[Client] --> B[API]\n  B --> C[Base de données]`}
            rows={5} className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-xs text-white placeholder-muted font-mono focus:outline-none focus:border-purple-500 resize-none" />
          <div className="flex gap-2 mt-2">
            <button onClick={convertMermaid} className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white rounded text-xs transition-colors">Convertir</button>
            <button onClick={() => setShowMermaid(false)} className="px-3 py-1 bg-surface hover:bg-border text-muted rounded text-xs transition-colors">Annuler</button>
          </div>
        </div>
      )}

      {/* Excalidraw */}
      <div className="flex-1 overflow-hidden">
        <Suspense fallback={<div className="flex items-center justify-center h-full text-muted">Chargement de l'éditeur...</div>}>
          <ExcalidrawComponent
            ref={excalidrawApiRef}
            initialData={{ elements, appState: { ...appState, theme: 'dark' } }}
            onChange={handleChange}
            UIOptions={{ canvasActions: { export: { saveFileToDisk: true } } }}
            theme="dark"
          />
        </Suspense>
      </div>
    </div>
  )
}
