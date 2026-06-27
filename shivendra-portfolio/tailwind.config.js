/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0A0E1A', 900: '#070A12', 800: '#0A0E1A', 700: '#11162A', 600: '#1A2138' },
        aurora: { indigo: '#6366F1', violet: '#A855F7', rose: '#F472B6' },
        champagne: '#E8C39E',
        mist: '#F5F6FA',
        muted: '#8B92AB',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        sans: ['"General Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { tightest: '-0.06em' },
      keyframes: {
        'aurora-drift': { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '33%': { transform: 'translate(4%,-6%) scale(1.1)' }, '66%': { transform: 'translate(-4%,4%) scale(0.95)' } },
        'float-slow': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        'shimmer': { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
        'scroll-dot': { '0%': { transform: 'translateY(0)', opacity: '0' }, '40%': { opacity: '1' }, '80%': { transform: 'translateY(14px)', opacity: '0' }, '100%': { opacity: '0' } },
      },
      animation: {
        'aurora-drift': 'aurora-drift 18s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'shimmer': 'shimmer 6s linear infinite',
        'scroll-dot': 'scroll-dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
