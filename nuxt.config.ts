// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'CoCoHouse',
      meta: [
        { hid: 'og:image', property: 'og:image', content: '/images/logo.png' },
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  devtools: { enabled: true },
  modules: [
    [
      '@nuxtjs/i18n',
      {
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
        },
      },
    ],
  ],
});
