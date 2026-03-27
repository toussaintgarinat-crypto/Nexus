/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f0f13',
        surface: '#1a1a24',
        sidebar: '#111118',
        panel: '#161620',
        border: '#2a2a3a',
        text: '#e2e2f0',
        muted: '#8888aa',
        world: {
          web: '#3B82F6',
          mobile: '#10B981',
          ai: '#8B5CF6',
          backend: '#F59E0B',
          extension: '#EF4444',
          saas: '#06B6D4',
          xr: '#F97316',
          plugin: '#84CC16',
          custom: '#6B7280',
        }
      }
    }
  },
  plugins: []
}
