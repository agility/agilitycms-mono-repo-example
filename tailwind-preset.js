module.exports = {
    // mode: "jit",
    darkMode: false, // or 'media' or 'class'
    theme: {
      container: {
        screens: {
          sm: "1200px",
          md: "1200px",
          lg: "1200px",
          xl: "1200px",
        },
      },
      fontFamily: {
        display: ["Inter", "system-ui"],
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
        mono: [
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      extend: {
        width: {
          15.1: "15.1rem",
        },
        colors: {
          transparent: "transparent",
          agility: "#222",
          gray: {
            lightest: "#fff",
            100: "#f7fafc",
            200: "#edf2f7",
            300: "#e2e8f0",
            400: "#cbd5e0",
            500: "#a0aec0",
            600: "#718096",
            700: "#4a5568",
            800: "#2d3748",
            900: "#1a202c",
          },
          primary: {
            100: "#a273ff",
            200: "#935bff",
            300: "#8344ff",
            400: "#742cff",
            500: "#6415FF",
            600: "#5a13e6",
            700: "#5011cc",
            800: "#460fb3",
            900: "#3c0d99",
          },
          secondary: {
            100: "#7c8ba1",
            200: "#667892",
            300: "#506582",
            400: "#3a5173",
            500: "#243E63",
            600: "#203859",
            700: "#1d324f",
            800: "#192b45",
            900: "#16253b",
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
  };
  