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
        gray: colors.neutral, 
        'tt-dark-red': '#8b0000',
        'tt-gold': '#ffcc33',
        'tt-off-white': '#edeab5',
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
