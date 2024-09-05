export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Vision Zero Reporting',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Improving the way car crashes are reported in local media by using natural language processing to identify editorial anti-patterns that obscure the preventable nature of crashes.' },
      { name: 'format-detection', content: 'telephone=no' },

      // Facebook meta
      { property: 'og:url', content: 'https://visionzeroreporting.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Vision Zero Reporting' },
      { property: 'og:description', content: 'Improving the way car crashes are reported in local media by using natural language processing to identify editorial anti-patterns that obscure the preventable nature of crashes.' },
      { property: 'og:image', content: 'https://visionzeroreporting.com/preview.png' },

      // Twitter meta
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:domain', content: 'visionzeroreporting.com' },
      { property: 'twitter:url', content: 'https://visionzeroreporting.com/' },
      { name: 'twitter:title', content: 'Vision Zero Reporting' },
      { name: 'twitter:description', content: 'Improving the way car crashes are reported in local media by using natural language processing to identify editorial anti-patterns that obscure the preventable nature of crashes.' },
      { name: 'twitter:image', content: 'https://visionzeroreporting.com/preview.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-filters.js'
  ],

  router: {
    // Middleware that's applied globally: https://v2.nuxt.com/docs/directory-structure/middleware
    middleware: [
    ],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Environment variables: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env
  env: {
    baseURL: process.env.baseUrl
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.baseUrl,
    progress: false,
    credentials: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [ // See: https://stackoverflow.com/questions/56690294/vuejs-nuxtjs-unexpected-token-export
      'vue2-input-highlighter'
    ]
  }
}
