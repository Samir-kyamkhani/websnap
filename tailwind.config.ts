import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        // infinite moving card/testimonial
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
        },
      keyframes: {
        // infinite moving card/testimonial
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        // according
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      
    },
  },
  
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        /* For WebKit browsers (Chrome, Safari) */
        '::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgb(47,5,107)', // Tailwind color (Gray-500)
          borderRadius: '10%',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: '#f3f4f6', // Tailwind color (Gray-100)
        },
        /* For Firefox */
        'scrollbar-width': 'thin',
        'scrollbar-color': '#6b7280 rgb(47,5,107)',
      });
    },
  ],
};
export default config;
