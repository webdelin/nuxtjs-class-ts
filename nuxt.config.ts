import type { NuxtConfig } from '@nuxt/types'
const isDev: boolean = process.env.NODE_ENV !== 'production'
const config: NuxtConfig = {
  head: {
    title: 'nuxt-class-ts',
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

  loading: { color: '#0c64c1' },
  dev: isDev,
  css: [],

  plugins: ['~/plugins/vxm.ts'],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],

  modules: ['@nuxtjs/axios'],
  router: {
    middleware: ['mobile']
  },
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  build: {
        extend(config: Object, ctx: Object) {
      console.log(config, ctx)
    }
  }
}

export default config