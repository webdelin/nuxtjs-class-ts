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
  telemetry: false,
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
    middleware: ['user-agent']
  },
  build: {
  }
}

export default config
