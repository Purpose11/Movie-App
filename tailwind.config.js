/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBarColor: "#161D2F",
        iconColor: "#596890",
        mainBgColor: "#10141F",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
