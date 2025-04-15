export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2025-04-10',
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4,
  },
});
