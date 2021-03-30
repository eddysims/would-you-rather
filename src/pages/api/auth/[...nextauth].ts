import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { gql } from "@apollo/client";
import { client } from "@/lib/apollo";

const ADD_USER_MUTATION = gql`
  mutation addUser(
    $id: String!
    $name: String!
    $avatar: String
    $provider: String!
  ) {
    insert_users_one(
      object: { id: $id, name: $name, avatarUrl: $avatar, provider: $provider }
    ) {
      id
    }
  }
`;

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
