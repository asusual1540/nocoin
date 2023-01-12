module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
      },
      animation: {
        fadeIn: 'fadeIn .5s ease-out',
        fadeOut: 'fadeOut .5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0%' },
          '100%': { transform: '100%' },
        },
        fadOut: {
          '0%': { opacity: '100%' },
          '50%': { opacity: '100%' },
          '100%': { opacity: '0%' },
        },
      }
    },
    zIndex: {
      '100': '100',
      '101': '101',
    },
    screens: {
      'xxsm': '441px',
      'xsm': '500px',
      'sm': '640px',
      'md': '768px',
      'mlg': '855px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'helix-light' : '#242447',
      'helix-dark' : '#0e101e',
      'helix-neon' : '#76B900',
      'helix-sky' : '#78E3EC',
      'helix-lighter' : '#292929',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    scale: {
      '105' : '1.05',
      '110' : '1.10',
      '120' : '1.20',
    },
  },
  plugins: [

  ],
}
