import {NuxtAuthHandler} from '#auth';
import GithubProvider from 'next-auth/providers/github';

export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: '67b9d4b8092ae9fdaf3e',
      clientSecret: '48973048127b9f60dd07f6f51e91171b837c7d19'
    })
  ]
});