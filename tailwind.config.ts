/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#81c3fd",
        primaryVariant: "#7480ec",
        alert: "#ff7782",
        success: "#41f1b6",
        warning: "#ffbb55",
        infoDark: "#7d8da1",
        infoLight: "#dce1eb",
        backgroundDark: "#0b0c0d",
        backgroundLight: "#f6f6f9",
        backgroundVariant: "#181a1b",
        dark: "#363949",
        darkVariant: "#677483",
        light: "#edeffd",
        lightVariant: "#a3bdcc",
        white: "#fff",
        muted: "#7d8da1",

        primaryButton: "#006600",
        secondaryButton: "#000000",

        uploadFile: "#02387e1a",
      },
      backgroundImage: {
        aboutBanner: "url('../public/images/aboutBanner.png')",
      },
      padding: {
        cardPadding: "1.8rem",
        padding1: "1.2rem",
      },
      boxShadow: {
        none: "0",
        Dark: "0 2rem 3rem #00000066",
        Light: "0 2rem 3rem #848bc82e",
        Btn: "0 0 2rem #000000",
      },
      gridTemplateColumns: {
        dashboardLg: "auto 30rem",
        dashboard: "1fr",

        logs: "2.6rem auto",
      },
      borderRadius: {
        cardRadius: "2rem",
        radius1: "0.4rem",
        radius2: "0.8rem",
        radius3: "1.2rem",
      },
      scale: {
        175: "1.75",
        200: "2",
      },
      width: {
        14: "14rem",
        entry: "500px",
      },
      height: {
        login: "440px",
        register: "520px",
        calcNavbar: "calc(100% - 5rem)",
      },
      maxWidth: {
        maxImg: "6rem",
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
