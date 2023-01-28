/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      colors: {
        main: "#1f1f38",
        mainVariant: "#2c2c6c",
        primary: "#4db5ff",
        primaryVariant: "rgba(77,181,255,0.4)",
        light: "rgba(255,255,255,0.6)",
      },
      transitionProperty: {
        custom: "all ease",
      },
      transitionDuration: {
        custom: "400ms",
      },
      transitionTimingFunction: {
        custom: "ease",
      },
    },
  },
  plugins: [],
};
