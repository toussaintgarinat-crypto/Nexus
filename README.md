# ⚡ Nexus

Un Discord virtuel pour développeurs — construis et apprends avec un assistant IA vocal dans chaque canal.

## Concept

- **Mondes** = types d'outils tech (Web App, Mobile, IA, Backend, Extension, SaaS, XR, Plugin)
- **Canaux** = briques nécessaires à ce type d'outil (prédéfinis par template + ajout libre)
- **Assistant IA vocal** dans chaque canal : enseigne ou génère du code selon ce que tu demandes
- **Canvas Excalidraw** collaboratif : génère des schémas, modifie-les, discute dessus avec l'IA
- **Mode XR** : interface 3D avec WebXR, compatible Meta Quest, Apple Vision Pro, mobile AR

## Prérequis

- Node.js 20+
- Python 3.11+
- Docker (optionnel)

## Démarrage rapide

### Avec Docker

```bash
cd nexus
cp backend/.env.example backend/.env
docker-compose up
```

Ouvre `http://localhost:3000`

### Sans Docker (développement)

**Backend :**
```bash
cd nexus/backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload --port 8000
```

**Frontend :**
```bash
cd nexus/frontend
npm install
cp .env.example .env
npm run dev
```

Ouvre `http://localhost:3000`

## Configuration IA

Dans l'app → ⚙️ Paramètres → LLM :

| Provider | Clé API | Gratuit |
|----------|---------|---------|
| Groq | groq.com → API Keys | ✅ avec compte |
| Gemini | aistudio.google.com | ✅ avec compte |
| Ollama | localhost:11434 | ✅ local |
| OpenAI | platform.openai.com | ❌ payant |

## Utilisation

1. **Créer un monde** → clique `+` dans la barre latérale → choisis le type de projet
2. **Sélectionner un canal** → ex: `#authentification` dans un monde Web App
3. **Parler à l'assistant** → maintiens le micro ou tape → il enseigne ou code selon ta demande
4. **Générer un schéma** → l'assistant crée du Mermaid → s'affiche dans Excalidraw
5. **Modifier le schéma** → dessine directement → partage avec l'assistant via le bouton 🤖
6. **Mode XR** → clique 🥽 → espace 3D avec canaux flottants + assistant en panneau spatial

## Architecture

```
nexus/
├── backend/          # FastAPI (Python)
│   ├── models/       # SQLAlchemy : User, World, Channel, Message, Config
│   ├── routers/      # auth, worlds, channels, messages, ai, tokens, config
│   └── services/     # world_templates (8 types prédéfinis)
├── frontend/         # React + Vite
│   ├── components/   # UI Discord-like + AIAssistant + ExcalidrawPanel
│   ├── hooks/        # useVoice (Web Speech API) + useAI
│   ├── services/     # api.js (tous les appels backend)
│   └── xr/           # XRScene (React Three Fiber + WebXR)
└── livekit/          # Config serveur vocal
```

## Stack

- **Backend** : FastAPI, SQLAlchemy, SQLite/PostgreSQL, LiveKit
- **Frontend** : React 18, Vite, Tailwind CSS
- **IA** : Groq, Gemini, OpenAI, Mistral, Ollama, offline
- **Voix** : Web Speech API (STT+TTS), extensible ElevenLabs/Whisper
- **Schémas** : Excalidraw + mermaid-to-excalidraw
- **XR** : React Three Fiber + @react-three/xr (WebXR)
- **Vocal temps réel** : LiveKit (WebRTC)
