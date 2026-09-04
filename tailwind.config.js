/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-dark': '#060B13',
        'royal-navy': '#0B1728',
        'royal-slate': '#13243C',
        'royal-card': '#101F35',
        'royal-ivory': '#FCFAF6',
        'royal-cream': '#F5F0E6',
        'royal-gold': {
          DEFAULT: '#D4AF37',
          light: '#F5DE88',
          dark: '#B08820',
          50: '#FAF7EE',
          100: '#F4ECCF',
          200: '#EBD9A2',
          300: '#DFC272',
          400: '#D6AE47',
          500: '#D4AF37',
          600: '#B79124',
          700: '#917118',
          800: '#6C5212',
          900: '#4B380B'
        },
        'royal-emerald': {
          DEFAULT: '#0B3B2B',
          dark: '#06241A',
          light: '#145740'
        },
        'royal-crimson': {
          DEFAULT: '#6E1327',
          dark: '#4A0B19',
          light: '#941E38'
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5DE88 0%, #D4AF37 50%, #A87E18 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #FFF3B0 50%, #D4AF37 100%)',
        'royal-gradient': 'linear-gradient(180deg, #070F1B 0%, #0C1B33 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #06241A 0%, #0B3B2B 100%)',
        'dark-card-gradient': 'linear-gradient(145deg, rgba(19, 36, 60, 0.7) 0%, rgba(11, 23, 40, 0.9) 100%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'gold': '0 10px 30px -10px rgba(212, 175, 55, 0.35)',
        'gold-lg': '0 20px 40px -15px rgba(212, 175, 55, 0.45)',
        'royal': '0 20px 40px -15px rgba(6, 11, 19, 0.6)',
      }
    },
  },
  plugins: [],
}
