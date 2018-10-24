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
    "no-trailing-spaces": "off",
    "eol-last": "off",
    "react/prop-types": "off",
    "mozilla/no-define-cc-etc": "off",
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
