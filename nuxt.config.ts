export default {
  telemetry: false,
  head: {
    title: 'nuxt-typescript-decorators',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  server: {
    host: '0.0.0.0',
    port: 333
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],
  build: {}
};
