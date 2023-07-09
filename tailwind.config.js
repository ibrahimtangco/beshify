/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["Hind", "sans-serif"],
                title: ["Montserrat", "sans-serif"],
            },
        },
    },

    plugins: [],
};
