/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burger-black': '#000000',
        'burger-charcoal': '#1A1A1A',
        'burger-dark': '#0D0D0D',
        'burger-red': '#FF0050',
        'burger-neon-red': '#E63946',
        'burger-orange': '#FF6B35',
        'burger-yellow': '#FFD700',
        'burger-bun': '#D2691E',
        'burger-white': '#FFFFFF',
        'burger-gray': '#CCCCCC',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'grain': 'grain 8s steps(10) infinite',
        'float-slow': 'float-slow 20s ease-in-out infinite',
        'float-slow-reverse': 'float-slow-reverse 25s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 0, 80, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 0, 80, 1)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
