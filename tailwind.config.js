module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,vue}'
  ],
  theme: {
    colors: {
      'header': '#1d4b6f',
      'white': '#FFF',
      'lightgray': '#94a3b8',
      'green': '#42B883',
      'darkgreen': '#3B8070',
      'moviecardbg': '#496583',
      'tweetbor': '#485057',
      'logreg': '#475569'
    },
    screens: {
      'xs': { 'min': '375px', 'max': '639px' },
      'sm': { 'min': '640px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'max': '1280px' }
    }
  }, 
  plugins: []
};
