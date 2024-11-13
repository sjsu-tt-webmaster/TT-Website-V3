import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: colors.neutral, // keep Tailwind's neutral color palette for grays
        darkRed: "#8B0000",
        gold: "#FFCC33",
        offWhite: "#EDEAB5",
      },
      fontFamily: {
        sans: ["Arial", ...defaultTheme.fontFamily.sans],
        serif: ["Arial", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
export default config;
