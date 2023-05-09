const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ["var(--font-ibm-plex-mono)", ...defaultTheme.fontFamily.mono],
      sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      boxShadow: {
        closeShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
      },
    },
  },
  plugins: [require("tailwindcss-radix")(), require("tailwindcss-animate")],
};
