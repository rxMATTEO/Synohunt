import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { NuxtAuthHandler } from '#auth';

const prisma = new PrismaClient();

async function getUser (session) {
  return await $fetch('/api/session', {
    method: 'POST',
    body: {
      email: session?.user?.email,
      creating: true,
    }
  });
}
export default NuxtAuthHandler({
  pages: {
    signIn: '/login'
  },
  secret: '2f193d57f83e046dfcecabefcb7ad03c', //
  // todo replace with random
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: async ({ session, token }) => {
      const user = await getUser(session);
      session.user = user;
      return Promise.resolve(session);
    }
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
      authorize (credentials: any) {
        const user = {
          email: 'test@mail.com',
          password: 'password'
        };
        if (credentials?.email === user.email && credentials?.password === user.password) {
          return user;
        }
      }
    })
  ]
});
