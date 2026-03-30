import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFAF6',
          100: '#F9F3EC',
          200: '#F5EFE6',
          300: '#EDE3D5',
          400: '#E0D5C8',
          500: '#CEC0AF',
        },
        brown: {
          50: '#FAF5F0',
          100: '#EFE3D8',
          200: '#D4B896',
          300: '#B89070',
          400: '#8B6552',
          500: '#6B4C3B',
          600: '#4A3228',
          700: '#2C1810',
          800: '#1A0E08',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
