import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: "#0c55aa",
        lightBg: "#f4f7f9",
        themeWhite: "#ffffff",
        lightYellow: "#ffd43a",
        borderColor: "#eaebed",
        skyColor: "#0989ff",
        lightText: "#55585b",
      },
    },
  },
  plugins: [],
} satisfies Config;
