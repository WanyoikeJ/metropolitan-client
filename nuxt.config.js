const env = require('dotenv').config()
export default {
    env: env.parsed,
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'metropolitan',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#3D4290', height: '5px' },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '@/plugins/swiper.js' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
    ],

    colorMode: {
        classSuffix: '',
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        // hid: 'nuxt-color-mode-script',
        // globalName: '__NUXT_COLOR_MODE__',
        // componentName: 'ColorScheme',
        // classPrefix: '',
        // classSuffix: '-mode',
        // storageKey: 'nuxt-color-mode'
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/auth-next',
        'nuxt-webfontloader',
    ],

    webfontloader: {
        google: {
            families: ['Montserrat:100,200,300,400,500,600,700,800,900'] //Loads Lato font with weights 400 and 700
        }
    },

    pwa: {
        manifest: {
            name: 'Batakenya Online shop',
            short_name: 'Bata Kenya',
            // start_url: 'index',
            theme_color: '#e60000',
            display: 'standalone',
        },
        icon: {
            iconSrc: './static/icon.png',
        },
    },

    auth: {
        strategies: {
            'laravelJWT': {
                provider: 'laravel/jwt',
                url: 'http://metopolitanapi.test',
                token: {
                    property: 'access_token',
                    maxAge: 60 * 60
                },
                refreshToken: {
                    maxAge: 20160 * 60
                },
            },
        }
    },

    // router: {
    //     middleware: ['auth']
    //   },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: process.env.BASE_URL
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}