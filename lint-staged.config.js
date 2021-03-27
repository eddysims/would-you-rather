module.exports = {
  "*.{js,jsx,ts,tsx}": ["yarn lint:js", "jest --bail --findRelatedTests"],
  "*.{md,mdx}": ["yarn lint:md"],
};
