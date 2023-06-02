/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  theme: {
    colors: {
      primaryBgColor: 'rgba(7, 20, 36, 1)',
      secondaryBgColor: 'rgba(13, 23, 42, 1)',
      hoverBgColor: ' rgb(251 191 36)',
      primaryTextColor: '#fff',
      secondaryTextColor: '#17b6b1',
      thirdTextColor: ' rgb(251 191 36)',
      transparent: 'transparent',
      inputALert: 'red',
    },
    backgroundImage: {
      'hero-pattern': "url('/images/herobg.png') ",
      'skill-pattern': "url('/images/Rectangle62.png')",
      'gradient-linear': 'linear-gradient(90deg ,#272750 10%,#1BE4DC )',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(0deg) translate(0px,0px)' },
        '50%': { transform: 'rotate(5deg) translate(3px,3px)' },
      },
    },
  },
};
