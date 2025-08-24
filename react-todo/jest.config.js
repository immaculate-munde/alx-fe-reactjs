// jest.config.js
module.exports = {
  testEnvironment: "jsdom", // needed for React testing
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest" // transform JS/TS files with Babel
  },
  moduleNameMapper: {
    // mock CSS imports
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    // mock image/SVG imports
    "\\.(svg|png|jpg|jpeg|gif)$": "<rootDir>/__mocks__/fileMock.js"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // load jest-dom matchers
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
