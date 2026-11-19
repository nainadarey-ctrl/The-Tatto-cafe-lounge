/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Marcellus"', 'Georgia', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F4EFE6',
          300: '#EDE5D8',
          400: '#E2D6C3',
        },
        espresso: {
          950: '#0F0B09',
          900: '#1B1412',
          800: '#2A201C',
          700: '#3D302A',
          600: '#54433B',
        },
        gold: {
          light: '#DFCAAB',
          DEFAULT: '#C5A059',
          dark: '#A6823B',
          deep: '#6E4E2A',
        },
        terracotta: {
          500: '#B85D43',
          600: '#9E4B33',
        }
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(27, 20, 18, 0.08), 0 0 1px 1px rgba(197, 160, 89, 0.15)',
        'luxury-hover': '0 25px 50px -12px rgba(27, 20, 18, 0.15), 0 0 1px 1px rgba(197, 160, 89, 0.3)',
        'glow-gold': '0 0 35px -5px rgba(197, 160, 89, 0.3)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C5A059 0%, #E3CCA2 50%, #A6823B 100%)',
        'espresso-gradient': 'linear-gradient(180deg, #1B1412 0%, #0F0B09 100%)',
        'radial-vignette': 'radial-gradient(circle at center, transparent 40%, rgba(15, 11, 9, 0.85) 100%)',
      }
    },
  },
  plugins: [],
}
