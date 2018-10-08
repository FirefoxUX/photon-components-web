module.exports = {
  extends: [
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:mozilla/recommended",
  ],
  parser: "babel-eslint",
  settings: {
    react: {
      version: "16.4.2",
    },
  },
  rules: {
    "import/no-named-as-default": "off",
    "import/prefer-default-export": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      env: {
        node: true,
      },
    },
  ],
};
