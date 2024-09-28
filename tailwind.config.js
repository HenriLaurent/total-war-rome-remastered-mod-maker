/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      fontFamily: {
        babelstonehan: ["BabelStoneHan", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
        cormorantsc: ["CormorantSC", "serif"],
        crimsontext: ["CrimsonText", "serif"],
        genryumintw: ["GenryuMinTW", "serif"],
        minionpro: ["MinionPro", "serif"],
        notoserif: ["NotoSerif", "serif"],
        timesnewroman: ["TimesNewRoman", "serif"],
        verdana: ["Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
