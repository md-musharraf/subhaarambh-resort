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
        // Classic Light Palette
        'classic-bg': '#FAF8F5',
        'classic-surface': '#FFFFFF',
        'classic-surface-alt': '#F3EFE6',
        'classic-border': '#E8E2D5',
        'classic-border-strong': '#D4C9B4',
        'classic-text': '#18181B',
        'classic-muted': '#71717A',
        'classic-dark': '#121214',
        'classic-navy': '#0F1E36',
        'classic-gold': {
          DEFAULT: '#B8860B',
          dark: '#854D0E',
          light: '#D4AF37',
          50: '#FDFBF7',
          100: '#FAF4E5',
          200: '#F4E7C4',
          300: '#E9D294',
          400: '#DCBA64',
          500: '#B8860B',
          600: '#926F1B',
          700: '#6C5015',
        },

        // Royal Dark Opulence Palette
        'royal-dark': '#060D17',
        'royal-navy': '#0B1728',
        'royal-card': '#101F35',
        'royal-slate': '#1A2942',
        'royal-crimson': '#881337',
        'royal-gold': {
          DEFAULT: '#D4AF37',
          light: '#F5DE88',
          dark: '#AA820A',
          100: '#FDF7E7',
          200: '#FCEFCF',
          300: '#F8DF9F',
          400: '#F5DE88',
          500: '#D4AF37',
          600: '#AA820A',
          700: '#805F06',
          800: '#553E03',
          900: '#2A1E01',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5DE88 0%, #D4AF37 50%, #AA820A 100%)',
        'gold-gradient-dark': 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #854D0E 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #F5DE88 50%, #D4AF37 100%)',
        'light-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)',
        'champagne-gradient': 'linear-gradient(135deg, #FAF8F5 0%, #F3EFE6 100%)',
      },
      boxShadow: {
        'clean': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'clean-md': '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'clean-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
        'gold': '0 10px 25px -5px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 15px 35px -5px rgba(212, 175, 55, 0.35)',
      }
    },
  },
  plugins: [],
}
