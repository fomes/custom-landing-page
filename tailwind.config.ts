import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        default: "15px",
      },
    },
    extend: {
      colors: {
        primary: "#242a2b",
        secondary: "#808080",
        accent: {
          default: "#1cbccf",
          secondary: "#18abbc",
          tertiary: "#90c6cd",
        },
        grey: "#e8f0f1",
      },
      fontFamily: {
        primary: "Poppins",
      },
      boxShadow: {
        custom1: "0px 2px 40px 0px rgba(8, 70, 78, 0.08)",
        custom2: "0px 0px 30px 0px rgba(8, 73, 81, 0.06)",
      },
      backgroundImage: {
        services: "url(../../assets/img/services/bg.svg)",
        testimonials: "url(../../assets/img/testimonials/bg.svg",
        departaments: "url(../../assets/img/departaments/bg.svg",
        quoteLeft: "url(../../assets/icons/testimonials/quote-left.svg",
        quoteRight: "url(../../assets/icons/testimonials/quote-right.svg",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;