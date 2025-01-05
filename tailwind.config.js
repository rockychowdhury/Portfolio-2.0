/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marble: '#F2F8FC',
        action: '#896442',
        action_dark:'#70503E',
        primary: '#eeedec',
        secondary: '#fafafa',
        accent:'',
        natural: '#333333',
        highlight:'#70503E',
        newBg: '#f3f6f8',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        logo: ['Concert One', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem', 
          sm: '2rem',
          lg: '4rem',
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
        
      },
      boxShadow: {
        custom: 'rgba(33, 35, 38, 0.1) 0px -10px 10px -10px',
        'top-md': '0px -4px 6px -1px rgba(0, 0, 0, 0.01), 0px -2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
      
      spacing: {
        128: '32rem', // Custom large spacing
        144: '36rem', // Extra-large spacing
      },
      borderRadius: {
        '4xl': '2rem', // Extra rounded corners
      },
      screens: {
        xs: '480px', // Added custom breakpoint for extra small screens
      },
    },
  },
  plugins: [
  ],
}