/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      dark: "#000"
    },
    extend: {
      fontFamily: {
        "inter-regular": ["Inter-Regular"],
        "inter-medium": ["Inter-Medium"],
        "inter-semibold": ["Inter-SemiBold"],
        "inter-bold": ["Inter-Bold"],
        "poppins-bold": ["Poppins-Bold"],
        "poppins-medium": ["Poppins-Medium"],
        "poppins-regular": ["Poppins-Regular"],
        "poppins-semibold": ["Poppins-SemiBold"],
      }
    },
  },
  plugins: [],
}