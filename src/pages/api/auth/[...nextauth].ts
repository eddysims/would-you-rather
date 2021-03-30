import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { client } from "@/lib/apollo";
import { ADD_USER_MUTATION } from "./nextauth.gql";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  session: {
    jwt: true,
  },
  callbacks: {
    async session(session, token) {
      const callbackSession = {
        ...session,
      };

      if (token.provider) {
        callbackSession.user.provider = token.provider;
      }

      if (token.sub) {
        callbackSession.user.id = token.sub;
      }

      return session;
    },
    async jwt(token, user, account) {
      const userIsSignedIn = user && account;

      const callbackToken = {
        ...token,
      };

      if (account) {
        callbackToken.provider = account.provider;
      }

      /**
       * Create the user in the DB
       */
      if (userIsSignedIn) {
        client.mutate({
          mutation: ADD_USER_MUTATION,
          variables: {
            id: `${user.id}`,
            name: token.name,
            provider: account.provider,
            avatar: token.picture,
          },
        });
      }

      return callbackToken;
    },
  },
});
