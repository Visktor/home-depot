const { nextui } = require('@nextui-org/theme')
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [
        nextui({
            layout: {
                radius: {
                    small: '0.25rem',
                    medium: '0.5rem',
                    large: '0.75rem',
                },
            },
        }),
    ],
}
