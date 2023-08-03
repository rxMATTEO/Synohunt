// https://nuxt.com/docs/api/configuration/nuxt-config
const baseUrl = '/';
const themeId = 'theme-link';
const nuxtConfig = {
  devtools: {enabled: true},
  buildModules: ['@nuxt/typescript-build'],
  css: [
    'primeflex/primeflex.css',
    'primeicons/primeicons.css',
  ],
  build: {
    transpile: ['primevue']
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@sidebase/nuxt-auth',
  ],
  auth: {
    isEnabled: true,
    origin: 'http://localhost:3000',
    basePath: '/api/auth',
    globalAppMiddleware: true,
  },
  pinia: {
    autoImports: [ 'defineStore',
      ['defineStore', 'definePiniaStore']
    ],
  },
  tailwindcss: {},
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: {name: 'layout', mode: 'out-in'},
    baseURL: baseUrl,
    head: {
      link: [
        {
          id: themeId,
          rel: 'stylesheet',
          href: baseUrl + 'themes/bootstrap4-dark-purple/theme.css'
        }
      ],
    },
  },
  runtimeConfig: {
    public: {
      themeId,
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "./src/assets/_colors.sass" as *\n'
        }
      }
    }
  },
  srcDir: './src',
};
// @ts-ignore
export default defineNuxtConfig(nuxtConfig);
export {themeId};
