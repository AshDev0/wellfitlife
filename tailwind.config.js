// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981', // emerald-600
          green: '#10B981',   // emerald-600 for consistency
          light: '#34D399',   // emerald-500
          dark: '#059669'     // emerald-700
        },
        accent: {
          blue: '#2563EB',    // blue-600
          cyan: '#06B6D4',    // cyan-500
          dark: '#1E40AF'     // blue-700
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}