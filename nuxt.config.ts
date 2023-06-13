// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/devtools-edge',
    'nuxt-icon',
    '@nuxtjs/sanity',
  ],
  runtimeConfig: {
    public: {
      sanity: {
        projectId: 'ld9rfujx',
        dataset: 'production',
      },
    },
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      title: 'Y.D. Portfolio web app',
      meta: [
        {
          name: 'description',
          content:
            'Welcome to the personal portfolio web application of Yevhen Dovhan, front-end developer. Browse through a collection of my web projects. Explore the portfolio and discover the work, contact me if you have job propositions.',
        },
      ],
    },
  },
  css: ['@/assets/css/styles.css'],
});
