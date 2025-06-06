// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/fonts'],
  css: ['./assets/css/main.css'],
  fonts: {
    defaults: {
      styles: ['normal'],
      subsets: ['latin']
    }
  },
})