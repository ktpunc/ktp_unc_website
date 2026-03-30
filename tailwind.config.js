module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:    '#13294B',
        'navy-light': '#1e3f70',
        blue:    '#4B9CD3',
        'blue-light': '#7BBDE4',
        'blue-pale': '#EBF4FB',
        'blue-mid': '#D0E9F7',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':   'fadeUp 0.65s ease-out forwards',
        'fade-in':   'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'card':    '0 1px 3px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.1), 0 12px 32px rgba(0,0,0,0.08)',
        'nav':     '0 1px 0 rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
