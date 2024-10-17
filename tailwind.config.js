/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headers: 'hsl(233, 13%, 49%)',
        price: ' hsl(232, 13%, 33%)',
        details: 'hsl(234, 14%, 74%)'

      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
      },
      height: {
        '128': '28rem',
      },
      width: {
        '75': '19rem'
      }
    },
  },
  plugins: [],
};
