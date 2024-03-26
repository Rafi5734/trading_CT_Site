/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        // Using example className: font-montserrat
      },
      colors: {
        primary: "#289dcf", // text-primary bg-primary
        secondary: "#6c8c99", // text-secondary bg-secondary
        background: "#232323", // text-background bg-background
        secondBackground: "#153045",
        // Using example className: text-primary
      },

      boxShadow: {
        // Using example className: shadow-primaryShadow
        primaryShadow: "0 0.5rem 1rem rgba(22, 28, 45, 0.15)",
        secondaryShadow: "2px 5px 10px rgba(0, 0, 0, 0.15)",
        smallCardShadow: "0 0.5rem 1rem rgba(22, 28, 45, 0.15)",
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      // Using example of className: sm:text-[20px]

      md: "768px",
      // => @media (min-width: 768px) { ... }
      // Using example of className: md:text-[20px]

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      // Using example of className: lg:text-[20px]
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      // Using example of className: xl:text-[20px]

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      // Using example of className: 2xl:text-[20px]
    },
  },
  plugins: [require("daisyui")],
}