import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0A0A0F',
          elev1: '#11111A',
          elev2: '#171727',
        },
        text: {
          high: '#FFFFFF',
          med: '#C9C9D4',
          low: '#8E8EA0',
          purple: '#BBA6FF',
        },
        border: {
          DEFAULT: '#23233B',
        },
        primary: {
          DEFAULT: '#8B5CF6',
          hover: '#A78BFA',
          deep: '#6D28D9',
          50: '#F3ECFC',
          100: '#E7D9F9',
          200: '#CFB3F3',
          300: '#B78DED',
          400: '#9F66E7',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        gradient: {
          start: '#0A0A0F',
          mid: '#2B175F',
          end: '#5A1FC2',
        },
        status: {
          success: '#22C55E',
          warning: '#F59E0B',
          danger: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(30deg, #0A0A0F 0%, #2B175F 50%, #5A1FC2 100%)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 24px rgba(139, 92, 246, 0.15)',
        'glow-lg': '0 0 48px rgba(139, 92, 246, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;