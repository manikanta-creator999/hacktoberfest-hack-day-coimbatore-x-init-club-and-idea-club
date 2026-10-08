/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#090d16',
        card: '#0f172a',
        'card-hover': '#1e293b',
        border: '#1e293b',
        'border-focus': '#38bdf8',
        terminal: {
          dark: '#030712',
          panel: '#0B1120',
          accent: '#06B6D4',
          highlight: '#38BDF8',
          danger: '#EF4444',
          warning: '#F59E0B',
          success: '#10B981',
          muted: '#64748B'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Roboto Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
