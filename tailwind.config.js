/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "message": ['var(--message-font)'],
        "primary": ['var(--primary-font)']
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "black": "var(--black)",
        "black-text": "var(--black-text)",
        "secondary-color": "var(--secondary-color)",
        "accent-color-first": "var(--accent-color-first)",
        "accent-color-second": "var(--accent-color-second)",
        "background-light-color": "var(--background-light-color)",
        "hover-transparent-color": "var(--hover-transparent-color)"
      }
    },
  },
  plugins: [],
}

