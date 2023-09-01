import { NuxtConfig } from '@nuxt/types';
import ViteMinifyPlugin from 'vite-plugin-minify';

const baseUrl = '/';
const nuxtConfig: NuxtConfig = {
  devtools: { enabled: true, enableTimeline: true },
  buildModules: ['@nuxt/typescript-build'],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Synohunt',
      short_name: 'Synohunt',
      theme_color: '#9800D7FF',
      description: 'Synohunt is ultimate word challenge that will test your knowledge of the language',
      icons: [
        {
          src: 'img/biglogo.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'img/biglogo.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'img/biglogo.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    }
  },
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
    '@nuxt/image',
    '@vite-pwa/nuxt'
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
    plugins: [ViteMinifyPlugin({})],
    esbuild: {
      drop: ['console', 'debugger']
    }
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
      meta: [
        { name: 'description', content: 'Synohunt is ultimate word challenge that will test your knowledge of the language' }
      ],
      htmlAttrs: {
        lang: 'en'
      },
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
