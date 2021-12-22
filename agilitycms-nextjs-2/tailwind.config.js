// tailwind.config.js
module.exports = {
  presets: [
    require('agility-mono-example-design-system/tailwind-preset.js')
  ],
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/agility-mono-example-design-system/components/**/*.{js,ts,jsx,tsx}",
  ],
  // Customizations specific to this project would go here
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fef2f2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d"
        }
      }
    }
  },
  variants: {
    extend: {
      
    },
  },
}