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
      email: session?.user?.email
    }
  });
}
export default NuxtAuthHandler({
  pages: {
    signIn: '/login'
  },
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  // todo figure out page redirections and shit
  session: {
    strategy: 'jwt'
  },
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
      async authorize (credentials: any) {
        const { email, creds } = credentials;
        const verified = await $fetch('/api/verify', {
          method: 'POST',
          body: {
            email,
            creds
          }
        });
        if (verified.isCredentialsValid) {
          const user = await prisma.user.update({
            where: { email },
            data: {
              name: verified.username
            }
          });
          return user;
        } else {
          return null;
        }
      }
    })
  ]
});
