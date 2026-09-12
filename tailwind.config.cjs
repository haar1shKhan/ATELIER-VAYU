module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A1118',
        secondary: '#A58A5C',
        surface: '#F4EFE6',
        "on-surface": '#171313',
        "background": '#F4EFE6',
        "on-primary": '#FFFFFF',
        "primary-container": '#4A1118',
        "on-primary-container": '#FFFFFF',
        "secondary-container": '#A58A5C',
        "on-secondary": '#FFFFFF',
        "error": '#BA1A1A',
        "on-error": '#FFFFFF',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
