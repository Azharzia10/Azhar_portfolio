/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EEF2F1',
        paperLine: '#C7D8DA',
        ink: '#0B2A4A',
        blue: {
          DEFAULT: '#1F5C8B',
          deep: '#0B1F2E',
        },
        amber: '#E8A33D',
        teal: '#3E8E8C',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: `linear-gradient(#C7D8DA 1px, transparent 1px), linear-gradient(90deg, #C7D8DA 1px, transparent 1px)`,
      },
      backgroundSize: {
        grid: '32px 32px',
      },
    },
  },
  plugins: [],
}
