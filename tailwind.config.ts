import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eBlack: "#09090B",
        eWhite: "#E6E6E6",
        eGray: "#AfADA7",
      },
    },
  },
  plugins: [],
};
export default config;
