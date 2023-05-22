// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/eslint-module', '@nuxt/devtools-edge', 'nuxt-icon'],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  build: {
    transpile: ['gsap'],
  },
  css: ['@/assets/css/styles.css'],
});
