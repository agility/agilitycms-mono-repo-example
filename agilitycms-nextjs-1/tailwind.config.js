// tailwind.config.js
module.exports = {
  presets: [
    require('../tailwind-preset.js')
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
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c"
        }
      }
    }
  },
  variants: {
    extend: {
      
    },
  },
}