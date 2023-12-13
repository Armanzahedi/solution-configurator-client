/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        fluent: ["Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#0078D4",
        secondary: "#004578",
      },
      boxShadow: {
        fluent: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
      borderWidth: {
        fluent: "2px",
      },
      borderRadius: {
        fluent: "4px",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0078d4",
          secondary: "#004578",
          accent: "#6ee7b7",
          neutral: "#2b3440",
          "base-100": "#ffffff",
          "base-200": "#f8f9fa",
          "base-300": "#e9ecef",
          "base-400": "#ced4da",
          "base-500": "#adb5bd",
          "base-600": "#6c757d",
          "base-700": "#495057",
          "base-800": "#343a40",
          "base-900": "#212529",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
          "--rounded-btn": "0.2rem",
          "--rounded-box": "0.1rem",
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: true, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
