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
        action: '#00D9FF',
        action_dark:'#0099CC',
        primary: '#6A8FC2',
        secondary: '#1E293B',
        accent:'#00D9FF',
        natural: '#F1F5F9',
        highlight:'#0DB8EC',
        darkBg: '#0F172A',
        darkCard: '#1E293B',
        darkText: '#F1F5F9',
        accentGold: '#FBBF24',
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
        custom: 'rgba(0, 217, 255, 0.1) 0px -10px 10px -10px',
        'top-md': '0px -4px 6px -1px rgba(0, 217, 255, 0.05), 0px -2px 4px -2px rgba(0, 217, 255, 0.1)',
        glow: '0 0 20px rgba(0, 217, 255, 0.3)',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        xs: '480px',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'dark-gradient-alt': 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
        'glow-gradient': 'radial-gradient(circle at 50% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 100%)',
      },
    },
  },
  plugins: [
  ],
}
