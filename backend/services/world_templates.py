WORLD_TEMPLATES = {
    "web": {
        "name": "Web App",
        "emoji": "🌐",
        "color": "#3B82F6",
        "description": "Construis des applications web modernes",
        "channels": [
            {"name": "architecture", "type": "mixed", "category": "Conception", "description": "Architecture globale, choix techniques, patterns"},
            {"name": "ui-composants", "type": "mixed", "category": "Frontend", "description": "Composants React/Vue, design system, accessibilité"},
            {"name": "routing", "type": "mixed", "category": "Frontend", "description": "Navigation, routes, gestion de l'URL"},
            {"name": "state-management", "type": "mixed", "category": "Frontend", "description": "Zustand, Redux, Context API, gestion d'état"},
            {"name": "api-rest", "type": "mixed", "category": "Backend", "description": "Endpoints REST, validation, serialisation"},
            {"name": "base-de-donnees", "type": "mixed", "category": "Backend", "description": "Schéma, requêtes, ORM, optimisation"},
            {"name": "authentification", "type": "mixed", "category": "Sécurité", "description": "JWT, OAuth, sessions, permissions"},
            {"name": "deploiement", "type": "mixed", "category": "DevOps", "description": "CI/CD, Vercel, Docker, hébergement"},
            {"name": "tests", "type": "mixed", "category": "Qualité", "description": "Tests unitaires, intégration, E2E"},
            {"name": "general", "type": "mixed", "category": "Général", "description": "Questions générales sur ce projet"},
        ]
    },
    "mobile": {
        "name": "App Mobile",
        "emoji": "📱",
        "color": "#10B981",
        "description": "Développe des apps iOS et Android",
        "channels": [
            {"name": "architecture", "type": "mixed", "category": "Conception", "description": "Architecture React Native / Flutter, dossiers"},
            {"name": "navigation", "type": "mixed", "category": "UI/UX", "description": "Stack, tabs, drawer, deep linking"},
            {"name": "composants", "type": "mixed", "category": "UI/UX", "description": "Composants natifs, animations, gestures"},
            {"name": "etat-global", "type": "mixed", "category": "Frontend", "description": "Redux, Zustand, Jotai pour mobile"},
            {"name": "api-integration", "type": "mixed", "category": "Backend", "description": "Appels API, cache, offline mode"},
            {"name": "notifications-push", "type": "mixed", "category": "Features", "description": "FCM, APNs, Expo Notifications"},
            {"name": "stockage-local", "type": "mixed", "category": "Features", "description": "AsyncStorage, SQLite, SecureStore"},
            {"name": "publication-store", "type": "mixed", "category": "DevOps", "description": "App Store, Play Store, Expo EAS"},
            {"name": "general", "type": "mixed", "category": "Général", "description": "Questions générales"},
        ]
    },
    "ai": {
        "name": "Outil IA",
        "emoji": "🤖",
        "color": "#8B5CF6",
        "description": "Crée des agents, RAG, chatbots et outils IA",
        "channels": [
            {"name": "architecture-agents", "type": "mixed", "category": "Conception", "description": "Design des agents, orchestration, workflows"},
            {"name": "llm-integration", "type": "mixed", "category": "Core", "description": "OpenAI, Anthropic, Groq, Ollama — API et SDK"},
            {"name": "rag-documents", "type": "mixed", "category": "Core", "description": "RAG, embeddings, vector DB, chunking"},
            {"name": "prompts-systeme", "type": "mixed", "category": "Core", "description": "Prompt engineering, system prompts, few-shot"},
            {"name": "embeddings", "type": "mixed", "category": "Core", "description": "Modèles d'embedding, similarité, recherche sémantique"},
            {"name": "memoire-contexte", "type": "mixed", "category": "Core", "description": "Mémoire long-terme, contexte, résumé automatique"},
            {"name": "api-interface", "type": "mixed", "category": "Interface", "description": "Interface utilisateur, streaming, UI/UX"},
            {"name": "evaluation", "type": "mixed", "category": "Qualité", "description": "Eval, benchmarks, détection hallucinations"},
            {"name": "general", "type": "mixed", "category": "Général", "description": "Questions générales"},
        ]
    },
    "backend": {
        "name": "Backend / API",
        "emoji": "⚙️",
        "color": "#F59E0B",
        "description": "Construis des APIs robustes et scalables",
        "channels": [
            {"name": "architecture", "type": "mixed", "category": "Conception", "description": "Architecture hexagonale, microservices, monolith"},
            {"name": "api-rest-graphql", "type": "mixed", "category": "API", "description": "REST, GraphQL, gRPC — design et implémentation"},
            {"name": "base-de-donnees", "type": "mixed", "category": "Data", "description": "PostgreSQL, MongoDB, schéma, index, requêtes"},
            {"name": "migrations", "type": "mixed", "category": "Data", "description": "Alembic, Prisma migrate, versioning DB"},
            {"name": "authentification", "type": "mixed", "category": "Sécurité", "description": "JWT, OAuth2, API keys, RBAC"},
            {"name": "cache-redis", "type": "mixed", "category": "Performance", "description": "Redis, stratégies de cache, invalidation"},
            {"name": "queues-workers", "type": "mixed", "category": "Performance", "description": "Celery, BullMQ, tâches asynchrones"},
            {"name": "docker-devops", "type": "mixed", "category": "DevOps", "description": "Docker, Kubernetes, CI/CD, déploiement"},
            {"name": "monitoring", "type": "mixed", "category": "DevOps", "description": "Logs, métriques, alerting, observabilité"},
            {"name": "general", "type": "mixed", "category": "Général", "description": "Questions générales"},
        ]
    },
    "extension": {
        "name": "Extension Navigateur",
        "emoji": "🧩",
        "color": "#EF4444",
        "description": "Développe des extensions Chrome/Firefox",
        "channels": [
            {"name": "manifest-structure", "type": "mixed", "category": "Conception", "description": "Manifest V3, structure, permissions déclarées"},
            {"name": "content-scripts", "type": "mixed", "category": "Core", "description": "Injection dans pages, manipulation DOM"},
            {"name": "background-service", "type": "mixed", "category": "Core", "description": "Service worker, état persistant, events"},
            {"name": "popup-ui", "type": "mixed", "category": "UI", "description": "Popup HTML/React, options page"},
            {"name": "storage-messaging", "type": "mixed", "category": "Core", "description": "chrome.storage, message passing, ports"},
            {"name": "permissions", "type": "mixed", "category": "Sécurité", "description": "Permissions minimales, CSP, sécurité"},
            {"name": "publication-store", "type": "mixed", "category": "DevOps", "description": "Chrome Web Store, AMO Firefox, review process"},
            {"name": "general", "type": "mixed", "category": "Général", "description": "Questions générales"},
        ]
    },
    "saas": {
        "name": "SaaS",
        "emoji": "🛒",
        "color": "#06B6D4",
        "description": "Lance ton produit SaaS de A à Z",
        "channels": [
            {"name": "business-model", "type": "mixed", "category": "Stratégie", "description": "Pricing, freemium, tiers, métriques SaaS"},
            {"name": "multi-tenant-auth", "type": "mixed", "category": "Core", "description": "Multi-tenant, organisation, rôles, invitations"},
            {"name": "paiement-abonnements", "type": "mixed", "category": "Core", "description": "Stripe, facturation, webhooks, portail client"},
            {"name": "dashboard-utilisateur", "type": "mixed", "category": "UI", "description": "Dashboard, analytics, settings utilisateur"},
            {"name": "onboarding", "type": "mixed", "category": "UI", "description": "Wizard, activation, first-run experience"},
            {"name": "emails-notifications", "type": "mixed", "category": "Features", "description": "Transactionnel, marketing, templates"},
            {"name": "analytics", "type": "mixed", "category": "Features", "description": "Métriques produit, funnel, rétention"},
            {"name": "api-publique", "type": "mixed", "category": "API", "description": "API publique, documentation, webhooks"},
            {"name": "infrastructure", "type": "mixed", "category": "DevOps", "description": "Scalabilité, HA, backup, SLA"},
            {"name": "general", "type": "mixed", "category": "Général", "description": "Questions générales"},
        ]
    },
    "xr": {
        "name": "Jeu / XR",
        "emoji": "🎮",
        "color": "#F97316",
        "description": "Crée des jeux et expériences VR/AR",
        "channels": [
            {"name": "scene-monde-3d", "type": "mixed", "category": "Conception", "description": "Design de scène, hiérarchie, environnement"},
            {"name": "webxr-setup", "type": "mixed", "category": "XR", "description": "WebXR API, React Three Fiber, sessions VR/AR"},
            {"name": "physique-collisions", "type": "mixed", "category": "Core", "description": "Cannon.js, Rapier, collisions, gravité"},
            {"name": "assets-3d", "type": "mixed", "category": "Ressources", "description": "GLTF, Blender, optimisation meshes"},
            {"name": "animations", "type": "mixed", "category": "Ressources", "description": "AnimationMixer, skeletal, spring animations"},
            {"name": "audio-spatial", "type": "mixed", "category": "Core", "description": "PositionalAudio, Web Audio API, ambiance"},
            {"name": "gameplay-logique", "type": "mixed", "category": "Core", "description": "Game loop, score, états de jeu, IA NPC"},
            {"name": "performance", "type": "mixed", "category": "Qualité", "description": "LOD, instancing, frustum culling, profiling"},
            {"name": "general", "type": "mixed", "category": "Général", "description": "Questions générales"},
        ]
    },
    "plugin": {
        "name": "Plugin Logiciel",
        "emoji": "🔌",
        "color": "#84CC16",
        "description": "Développe des plugins pour AutoCAD, Figma, Blender...",
        "channels": [
            {"name": "architecture-plugin", "type": "mixed", "category": "Conception", "description": "Structure, lifecycle, packaging du plugin"},
            {"name": "api-hote", "type": "mixed", "category": "Core", "description": "API du logiciel hôte (AutoCAD/Figma/Blender API)"},
            {"name": "ui-panneau", "type": "mixed", "category": "UI", "description": "Panneaux, dialogs, interface dans le logiciel"},
            {"name": "commandes-actions", "type": "mixed", "category": "Core", "description": "Commandes personnalisées, raccourcis, actions"},
            {"name": "scripts-automatisation", "type": "mixed", "category": "Core", "description": "Scripts batch, automation, macros"},
            {"name": "donnees-persistance", "type": "mixed", "category": "Data", "description": "Sauvegarder des données dans le fichier ou externe"},
            {"name": "publication-marketplace", "type": "mixed", "category": "DevOps", "description": "Autodesk App Store, Figma Community, publication"},
            {"name": "general", "type": "mixed", "category": "Général", "description": "Questions générales"},
        ]
    },
}


def get_template(world_type: str):
    return WORLD_TEMPLATES.get(world_type)


def get_all_templates() -> dict:
    return WORLD_TEMPLATES
