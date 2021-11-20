module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': ['Montserrat', 'sans-serif'],
        },
        extend: {
            keyframes: {
                slidein: {
                    '0%': {
                        transform: 'translate3d(100%, 0, 0)',
                        visibility: 'visible'
                    },
                    'to': {
                        transform: 'translateZ(0)',
                    }
                }
            },
            animation: {
                slidein: 'slidein 500ms ease-in-out',
            },
            padding: {
                '19': '4.6rem',
                '15': '3.8rem'
            },
            colors: {
                acient: {
                    50: '#EEF2FF',
                    100: '#E0E7FF',
                    200: '#C7D2FE',
                    300: '#A5B4FC',
                    400: '#818CF8',
                    500: '#6366F1',
                    600: '#4F46E5',
                    700: '#3D4290',
                    800: '#324D8E',
                    900: '#0F111A',
                },
                indigo: {
                    50: '#EEF2FF',
                    100: '#E0E7FF',
                    200: '#C7D2FE',
                    300: '#A5B4FC',
                    400: '#818CF8',
                    500: '#6366F1',
                    600: '#4F46E5',
                    700: '#3D4290',
                    800: '#324D8E',
                    900: '#3730A3',
                },
                orange: {
                    50: '#FFF7ED',
                    100: '#FFEDD5',
                    200: '#FED7AA',
                    300: '#FDBA74',
                    400: '#FB923C',
                    500: '#F97316',
                    600: '#D8732E',
                    700: '#C2410C',
                    800: '#9A3412',
                    900: '#7C2D12',
                },
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}