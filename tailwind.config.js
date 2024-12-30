module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Include all files in the app directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include all files in the components directory
  ],
  theme: {
    extend: {
      colors: {
        babyBlue: '#AED8F3', // Light blue
        ruddyBlue: '#4395CB', // Bright blue
      },
    },
  },
  plugins: [],
};