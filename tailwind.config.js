/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hm: {
          bg: '#2B163A',
          surface: '#341B47',
          primary: '#5C4074',
          lavender: '#CDB7E6',
          lilac: '#A78BFA',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Liberation Sans',
          'sans-serif',
        ],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(205,183,230,0.18), 0 12px 30px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(1200px circle at 20% 10%, rgba(92,64,116,0.45), transparent 55%), radial-gradient(900px circle at 80% 0%, rgba(167,139,250,0.22), transparent 55%), radial-gradient(900px circle at 50% 85%, rgba(205,183,230,0.18), transparent 55%)',
      },
    },
  },
  plugins: [],
}

