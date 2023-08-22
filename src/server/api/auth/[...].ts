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
  secret: '2f193d57f83e046dfcecabefcb7ad03c', //
  // todo replace with random
  // adapter: PrismaAdapter(prisma),
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
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!

        const user = {
          email: 'test@email.com',
          password: 'pass'
        };
        const prisma = new PrismaClient();
        // Any object returned will be saved in `user` property of the JWT
        return { user: prisma.user.findFirst() };

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    })
  ]
});
