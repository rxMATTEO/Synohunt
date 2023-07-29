export enum Platforms {
  pc = 'pc',
  mobile = 'mobile'
}

export type Theme = {
  dark: boolean,
  light: boolean
}

declare module 'nuxt/schema' {
  type AppConfig = {
    platform: Platforms,
    theme: Theme,
    title: string
  }
}

export default defineAppConfig({
  title: 'Translate-app',
  theme: {
    dark: true,
  },
  platform: ''
});
