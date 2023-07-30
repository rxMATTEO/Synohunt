export enum Platforms {
  pc = 'pc',
  mobile = 'mobile'
} // todo move this shit to index.d.ts or stmfhdshcdndc

export enum ThemesNames {
  dark = 'dark',
  light = 'light'
}

export type Theme = {
  [k in ThemesNames]?: boolean
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
