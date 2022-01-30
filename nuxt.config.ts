module.exports = {
  telemetry: false,
  head: {
    title: 'nuxt-typescript-decorators',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  server: {
    host: 'localhost',
    port: 3333
  },
  css: [],
  plugins: ['~/plugins/vxm.ts'],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],
  build: {}
};
