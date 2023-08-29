// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from '@nuxt/types';

const baseUrl = '/';
const nuxtConfig: NuxtConfig = {
  devtools: { enabled: true, enableTimeline: true },
  buildModules: ['@nuxt/typescript-build'],
  css: [
    // 'primeflex/primeflex.css', it's imported in _main tho
    'primeicons/primeicons.css'
  ],
  build: {
    transpile: ['primevue'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@sidebase/nuxt-auth'
  ],
  auth: {
    isEnabled: true,
    origin: process.env.AUTH_ORIGIN,
    basePath: '/api/auth',
    globalAppMiddleware: true
  },
  pinia: {
    autoImports: ['defineStore',
      ['defineStore', 'definePiniaStore']
    ]
  },
  app: {
    // baseURL: baseUrl,
    // head: {
    //   link: [
    //     {
    //       id: themeId,
    //       rel: 'stylesheet',
    //       href: baseUrl + 'themes/bootstrap4-dark-purple/theme.css'
    //     }
    //   ]
    // }
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "./src/assets/_main.sass" as *\n'
        }
      }
    }
  },
  srcDir: './src'
};
// @ts-ignore
export default defineNuxtConfig(nuxtConfig);
