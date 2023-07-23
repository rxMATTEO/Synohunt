// https://nuxt.com/docs/api/configuration/nuxt-config
import type {NuxtConfig} from "@nuxt/types";

const nuxtConfig: NuxtConfig = {
  devtools: {enabled: true},
  buildModules: ['@nuxt/typescript-build']
}

export default nuxtConfig;
