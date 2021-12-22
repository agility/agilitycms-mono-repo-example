// tailwind.config.js
module.exports = {
  presets: [
    require('./tailwind-preset.js')
  ],
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./agility-pageModules/*.{js,ts,jsx,tsx}",
  ],
  // Customizations specific to this project would go here
  theme: {
    extend: {
      
    }
  },
  variants: {
    extend: {
      
    },
  },
}