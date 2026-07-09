/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#14151A',
          soft: '#4A4C57',
        },
        paper: {
          DEFAULT: '#F7F4EC',
          raised: '#FFFFFF',
        },
        line: '#DEDACD',
        coral: {
          DEFAULT: '#FF5A4E',
          ink: '#C93E33',
        },
        teal: {
          DEFAULT: '#0F4C4A',
          tint: '#E4EEEC',
        },
        gold: {
          DEFAULT: '#E3A63B',
          tint: '#FBF0DA',
        },
        success: '#2E7D4F',
        danger: '#C93E33',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', '"Arial Narrow"', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Courier New"', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '18px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,21,26,0.04), 0 8px 24px -12px rgba(20,21,26,0.18)',
        pop: '0 12px 32px -8px rgba(20,21,26,0.28)',
      },
      spacing: {
        sidebar: '240px',
        topbar: '72px',
      },
      maxWidth: {
        container: '1180px',
      },
    },
  },
  plugins: [],
};
