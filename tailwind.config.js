/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#F04444",

          "bText": "#30384F",

          "bgLight": "#f7f7f7",

          "secondary": "#c13f1b",

          "accent": "#ff8292",

          "neutral": "#38263B",

          "base-100": "#F2F2F3",

          "info": "#91A5F2",

          "success": "#1D9F5A",

          "warning": "#D26F04",

          "error": "#EE432F",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}
