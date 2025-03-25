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
        background: "var(--background)",
        foreground: "var(--foreground)",
        grayLabel: "#E4E4E7",
        "zinc-900": "#111827",
        "zinc-50": "#FAFAFA",
        "zinc-950": "#09090B",
        "gray-400": "#A3A1A1"
      },
    },
  },
  plugins: [],
} satisfies Config;
