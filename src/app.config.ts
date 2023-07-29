export enum Platforms {
  pc = 'pc',
  mobile = 'mobile'
}

declare module 'nuxt/schema' {
  type AppConfig = {
    platform: Platforms,
    theme: 'dark' | 'light',
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
