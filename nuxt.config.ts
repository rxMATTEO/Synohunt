// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from '@nuxt/types';
import ViteMinifyPlugin from 'vite-plugin-minify';
import { createHtmlPlugin } from 'vite-plugin-html';

const baseUrl = '/';
const nuxtConfig: NuxtConfig = {
  devtools: { enabled: true, enableTimeline: true },
  buildModules: ['@nuxt/typescript-build'],
  css: [
    'primeflex/primeflex.min.css',
    'primeicons/primeicons.css'
  ],
  build: {
    transpile: ['primevue'],
    postcss: {
      postcssOptions: {
        plugins: {
          // tailwindcss: {}, double imports? why though?
          autoprefixer: {}
        }
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@sidebase/nuxt-auth',
    '@nuxt/image'
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
  vite: {
    plugins: [ViteMinifyPlugin({})]
  },
  runtimeConfig: {
    public: {
      AUTH_ORIGIN: process.env.AUTH_ORIGIN
    }
  },
  nitro: {
    compressPublicAssets: true
  },
  app: {
    head: {
      script: [
        {
          children: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.GOOGLE_TAG}');`
        },
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TAG}`,
          async: true
        }
      ]
    }
  },
  srcDir: './src'
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default defineNuxtConfig(nuxtConfig);
