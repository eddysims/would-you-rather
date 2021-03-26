import wouldYouRatherTheme from "./theme";
import "../src/styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: wouldYouRatherTheme,
  },
};
