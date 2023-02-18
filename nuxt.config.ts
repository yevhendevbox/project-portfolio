// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/strapi', '@nuxtjs/tailwindcss'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  head: {
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato&family=Merriweather+Sans:wght@400;700&display=swap' },
    ],
  },
  css: ['@/assets/css/styles.css'],
})

