export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
  ],
    theme: {
        extend: {
        colors: {
            primary: '#6F4E37',
            secondary: '#A67B5B',
            accent: '#D4A373',
            dark: '#1E1A17',
            cream: '#F5EFE6',
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        },
    },
    plugins: [],
};
