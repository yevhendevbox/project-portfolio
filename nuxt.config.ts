// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/devtools-edge',
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@nuxtjs/sanity',
  ],
  sanity: {
    projectId: 'ld9rfujx',
    dataset: 'production',
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: './en.json',
      },
      {
        code: 'uk',
        name: 'Ukrainian',
        file: './uk.json',
      },
    ],
    langDir: './locales/',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  css: ['@/assets/css/styles.css'],
});
