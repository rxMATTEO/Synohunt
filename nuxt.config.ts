// https://nuxt.com/docs/api/configuration/nuxt-config
import type {NuxtConfig} from '@nuxt/types';

const nuxtConfig: NuxtConfig = {
  devtools: {enabled: true},
  buildModules: ['@nuxt/typescript-build'],
  css: [
    'primevue/resources/themes/bootstrap4-dark-purple/theme.css'
  ],
  build: {
    transpile: ['primevue']
  },
  srcDir: './src',
};

export default defineNuxtConfig(nuxtConfig);
