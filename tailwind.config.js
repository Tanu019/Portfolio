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
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#00E5C9',
          500: '#00CBA9',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          950: '#042F2E',
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
