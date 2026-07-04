/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#050505',
          soft: '#0c0c0d',
        },
        surface: {
          DEFAULT: '#121214',
          raised: '#18181b',
          border: '#26262a',
        },
        gold: {
          50: '#fbf4de',
          100: '#f6e7b8',
          200: '#eed587',
          300: '#e3bd54',
          400: '#d6a832',
          500: '#c99a2e',
          600: '#a97a20',
          700: '#8a5f1c',
          800: '#6e4a1a',
          900: '#4a3113',
        },
        crimson: {
          DEFAULT: '#c8102e',
          soft: '#e0304a',
        },
        guardian: {
          DEFAULT: '#5b8def',
          soft: '#3a5a9e',
          glow: '#8fb3ff',
        },
        cashflow: {
          DEFAULT: '#3fc98a',
          soft: '#2c8f63',
          glow: '#7de3b3',
        },
        growth: {
          DEFAULT: '#e2a33e',
          soft: '#a9752a',
          glow: '#f6c876',
        },
      },
      borderRadius: {
        xl2: '20px',
        xl3: '24px',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.35)',
        card: '0 4px 24px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.03) inset',
        goldGlow: '0 0 40px rgba(214,168,50,0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f6e7b8 0%, #d6a832 32%, #a97a20 68%, #6e4a1a 100%)',
        'gold-sheen': 'linear-gradient(120deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 40%)',
      },
    },
  },
  plugins: [],
}
