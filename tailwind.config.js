/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
        serif: ['"Fraunces"', 'serif'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        fomra: {
          blue: '#0198D5',
          dark: '#0B0D12',
          light: '#F8FAFC',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#151921', // Deep dark paper
          900: '#0B0D12', // Premium deep black
          950: '#050608',
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
        'soft': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 40px -10px rgba(1, 152, 213, 0.4)', // Blue glow
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
