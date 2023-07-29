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
// todo export type and rewrite to ts also platforms types do
