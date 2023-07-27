// https://nuxt.com/docs/api/configuration/nuxt-config
import type {NuxtConfig} from '@nuxt/types';

const nuxtConfig: NuxtConfig = {
  devtools: {enabled: true},
  buildModules: ['@nuxt/typescript-build'],
  css: [
    'primevue/resources/themes/bootstrap4-dark-purple/theme.css',
    'primeflex/primeflex.css',
  ],
  build: {
    transpile: ['primevue']
  },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {},
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: {name: 'layout', mode: 'out-in'},
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
export default defineNuxtConfig(nuxtConfig);
