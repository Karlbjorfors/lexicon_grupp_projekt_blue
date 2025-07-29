/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/componenets/**/*.{js,ts,jsx,tsx,mdx}', // Note: keeping your typo in folder name
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',        // Light warm background (AAA text contrast)
        parchment: '#F3E9DC',    // Cards/modals
        umber: '#3A3226',        // Primary text (headers, dark UI)
        mushroom: '#8C7B6B',     // Secondary text
        terracotta: '#B5694D',   // Primary CTA (adjusted for better contrast)
        sage: '#8A9B7E',         // Secondary CTA (darker for accessibility)
        honey: '#D4A55E',        // Highlights
        tomato: '#C45C3D',       // Destructive actions (delete)
        basil: '#5C6D54',        // Success/confirm actions
        sky: '#7D9DAD',          // Info alerts (optional)
      },
      animation: {
        'bounce-slow': 'bounce-slow 3s infinite',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
