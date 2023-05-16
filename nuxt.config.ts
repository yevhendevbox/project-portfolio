// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/eslint-module', '@nuxt/devtools-edge', 'nuxt-icon'],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  // runtimeConfig: {
  //   public: {
  //     url: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
  //     prefix: '/api',
  //     version: 'v4',
  //     cookie: {},
  //     cookieName: 'strapi_jwt',
  //   },
  // },
  css: ['@/assets/css/styles.css'],
});
