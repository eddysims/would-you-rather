import { withNextRouter } from "storybook-addon-next-router";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import wouldYouRatherTheme from "./theme";

import "../src/styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: wouldYouRatherTheme,
  },
};

export const decorators = [
  withNextRouter,
  (Story) => (
    <ApolloProvider client={client}>
      <Story />
    </ApolloProvider>
  ),
];
