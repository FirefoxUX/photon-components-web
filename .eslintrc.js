module.exports = {
  extends: ["plugin:import/recommended", "plugin:mozilla/recommended"],
  overrides: [
    {
      files: ["*.js"],
      env: {
        node: true,
      },
    },
  ],
};
