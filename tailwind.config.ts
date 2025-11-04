import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        abyss: {
          950: "#05070E",
          900: "#090B17",
          800: "#0F1326",
          700: "#181D38"
        }
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        spectral: "0 0 60px 10px rgba(220, 38, 38, 0.2)"
      },
      animation: {
        pulseSlow: "pulse 8s ease-in-out infinite",
        flicker: "flicker 3s linear infinite"
      },
      keyframes: {
        flicker: {
          "0%, 18%, 22%, 25%, 53%, 57%, 100%": {
            opacity: "1"
          },
          "20%, 24%, 55%": {
            opacity: "0.4"
          }
        }
      }
    }
  },
  plugins: []
};

export default config;
