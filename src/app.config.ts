export enum Platforms {
  pc = 'pc',
  mobile = 'mobile'
}

export type Theme = {
  dark?: boolean,
  light?: boolean
}

export enum Themes {
  dark = 'bootstrap4-dark-purple',
  light = 'bootstrap4-light-purple',
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
