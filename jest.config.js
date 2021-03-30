module.exports = {
  clearMocks: true,
  testPathIgnorePatterns: ["/node_modules/"],
  verbose: true,
  setupFilesAfterEnv: ["./jestConfig.js"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/src/components$1",
    "^@/lib(.*)$": "<rootDir>/src/lib$1",
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
