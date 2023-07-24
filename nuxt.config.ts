// https://nuxt.com/docs/api/configuration/nuxt-config
import type {NuxtConfig} from '@nuxt/types';

const nuxtConfig: NuxtConfig = {
  devtools: {enabled: true},
  buildModules: ['@nuxt/typescript-build'],
  css: [
    'primevue/resources/themes/bootstrap4-dark-purple/theme.css',
    'primeflex/themes/primeone-dark.css',
    'primeflex/primeflex.css',
  ],
  build: {
    transpile: ['primevue']
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
