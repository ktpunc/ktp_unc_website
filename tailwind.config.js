module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Include all files in the app directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include all files in the components directory
  ],
  theme: {
    extend: {
      colors: {
        babyBlue: '#ADD8E6', // Light blue
        ruddyBlue: '#1E90FF', // Bright blue
      },
    },
  },
  plugins: [],
};