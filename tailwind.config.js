/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                gray: {
                    100: "#F2F2F2",
                    200: "#D9D9D9",
                    300: "#808080",
                    400: "#333333",
                    500: "#262626",
                    600: "#1A1A1A",
                    700: "#0D0D0D"

                },
                blue: {
                    300: "#4EA8DE",
                    400: "#1E6F9F"
                },
                purple: {
                    400: "#8284FA",
                    600: "#5E60CE"
                },
                red: {
                    200: "#E25858"
                }

            },
            width: {
                5: "5.625rem /* 90px */",
                50: "46rem /* 736px */"
            },
            height: {
                13: "3.25rem /* 52px */",
                17: "4.5rem /* 72px */",
                61: "15.25rem /* 244px */",

            },
            fontFamily: {
                Inter: ["Inter", "sans-serif"]
            }
        },
    },
    plugins: [require("@tailwindcss/forms")],
};