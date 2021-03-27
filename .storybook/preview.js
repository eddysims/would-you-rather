import { withNextRouter } from "storybook-addon-next-router";
import wouldYouRatherTheme from "./theme";

import "../src/styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: wouldYouRatherTheme,
  },
};

export const decorators = [withNextRouter];
