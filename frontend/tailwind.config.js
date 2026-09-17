/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030303',
        surface: {
          DEFAULT: '#0A0A0C',
          muted: '#121216',
          card: '#0D0D11',
        },
        foreground: '#F9FAFB',
        muted: '#9CA3AF',
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        primary: {
          DEFAULT: '#6366F1', // Indigo accent
          emerald: '#10B981', // Emerald accent
          violet: '#8B5CF6',  // Violet accent
          cyan: '#06B6D4',    // Cyan accent
          light: '#818CF8',
          dark: '#4F46E5',
        },
        accent: {
          DEFAULT: '#38BDF8',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.02)',
          border: 'rgba(255, 255, 255, 0.07)',
          hover: 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.47)',
        glow: '0 0 25px -5px rgba(99, 102, 241, 0.3)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15), transparent 70%)',
        'gradient-card': 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
      },
    },
  },
  plugins: [],
}

