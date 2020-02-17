module.exports = {
  "testMatch": [
    "<rootDir>/tests/**/*.(test).{js,jsx,ts,tsx}",
    "<rootDir>/tests/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
  ],
  "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
  },
}