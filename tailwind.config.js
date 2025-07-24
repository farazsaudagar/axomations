module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#164863',
                secondary: '#427d9d',
                accent: '#9bbec8',
                muted: '#ddf2fd',
                'soft-green': '#81c784',
                'sky-blue': '#4dd0e1',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                sans: [
                    'Montserrat',
                    'ui-sans-serif',
                    'system-ui',
                    'sans-serif',
                ],
            },
        },
    },
    plugins: [],
}
