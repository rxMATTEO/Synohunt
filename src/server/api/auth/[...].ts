import {NuxtAuthHandler} from '#auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NuxtAuthHandler({
  pages: {
    signIn: '/login'
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_PUBLIC,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Credentials',
      authorize(credentials: any){
        const user = {
          email : 'test@mail.com',
          password: 'password',
        };
        if(credentials?.email === user.email && credentials?.password){
          console.log('w');
          return user;
        }
      }
    })
  ]
});