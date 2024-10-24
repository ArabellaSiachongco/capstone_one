/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.{js,jsx,ts,tsx}", // For components directly in the components folder
    "./src/*.{js,jsx,ts,tsx}"             // For other files directly in the src folder, like App.js
  ],
  theme: {
    extend: {      
      fontFamily: {
        merriweather: ['Merriweather', 'serif'], 
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        p: ['14px', '20px'],      // Small paragraph text
        sm: ['18px', '26px'],     // Slightly larger text for smaller screens
        base: ['20px', '28px'],   // Base font size, regular text
        slg: ['36px', '40px'],    // Large size for subheadings or special content
        lg: ['48px', '54px'],     // Large heading text
        xl: ['60px', '68px'],     // Extra-large heading
        xxl: ['72px', '80px'],    // Very large text, like hero section headlines
      },

      screens: {
        sm: '426px',      // For small devices
        lg: '640px',      // For medium-sized devices
        xlg: '960px',     // For larger devices (tablets, small desktops)
        xl: '1024px',     // For even larger devices (default Tailwind xl)
      },

    },
  },
  plugins: [],
}
