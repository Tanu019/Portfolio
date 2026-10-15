/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        titanium: {
          bg: '#0E1015',
          card: '#161922',
          cardHover: '#1E2330',
          border: '#262B38',
          borderLight: '#32394A',
          arch: '#282E3E',
          silver: '#E2E8F0',
          muted: '#94A3B8',
        },
        themeDark: {
          bg: '#0E1015',
          card: '#161922',
          cardLight: '#1E2330',
          border: '#262B38',
          subtext: '#94A3B8',
        },
        emerald: {
          50: '#FAF7F2',
          100: '#F4ECE1',
          200: '#E7D8C4',
          300: '#D9C2A4',
          400: '#DEC396',
          500: '#C8A36E',
          600: '#B58448',
          700: '#9B6D36',
          800: '#7E5528',
          900: '#5C3C1B',
          950: '#2A1A0B',
        },
        darkbg: {
          DEFAULT: '#0E1015',
          card: '#161922',
          cardLight: '#1E2330',
          border: '#262B38',
          borderLight: '#32394A',
        }
      },
      fontFamily: {
        grotesk: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
