/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'itp': {
          'primary': '#344474',
          '1': '#344474',
          '2': '#05a253',
          '3': '#0454a9',
          '4': '#09498e',
          '5': '#145492',
          '6': '#299964',
          '7': '#2a3252',
          '8': '#204c8c',
          '9': '#30375c',
          '10': '#244478',
        }
      }
    },
  },
  plugins: [],
}