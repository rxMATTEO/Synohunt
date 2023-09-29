/// <reference types="vite/client" />
interface ImportMetaEnv {
  GITHUB_CLIENT_PUBLIC: string,
  GITHUB_CLIENT_SECRET: string,

  DATABASE_URL: string,
  POSTGRES_URL: string,
  POSTGRES_PRISMA_URL: string,
  POSTGRES_URL_NON_POOLING: string,
  POSTGRES_USER: string,
  POSTGRES_HOST: string,
  POSTGRES_PASSWORD: string,
  POSTGRES_DATABASE: string,

  AUTH_ORIGIN: string,
  VITE_AUTH_ORIGIN: string,
  NEXTAUTH_URL: string,
  AUTH_SECRET: string,

  GOOGLE_TAG: string,
  YA_METRIKA: string
}