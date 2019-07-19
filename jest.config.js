module.exports = {
  preset: "ts-jest",
  rootDir: "src",
  testEnvironment: "jsdom",
  setupTestFrameworkScriptFile: "./internal/jest-setup.ts",

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/internal/mocks/css.js"
  }
};
