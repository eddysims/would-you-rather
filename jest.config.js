module.exports = {
  clearMocks: true,
  testPathIgnorePatterns: ["/node_modules/"],
  verbose: true,
  setupFilesAfterEnv: ["./jestConfig.js"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/src/components$1",
    "^@/hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@/lib(.*)$": "<rootDir>/src/lib$1",
    "^@/types(.*)$": "<rootDir>/src/types$1",
    "^@/graphql(.*)$": "<rootDir>/src/graphql$1",
    "^@/data(.*)$": "<rootDir>/src/data$1",
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
