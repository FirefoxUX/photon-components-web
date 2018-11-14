const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");
const { version } = require("@storybook/core/package.json");
const { getPreviewHeadHtml, getManagerHeadHtml, getPreviewBodyHtml } =
  require("@storybook/core/dist/server/utils");

const INDEX_TEMPLATE = require.resolve("./index.ejs");

module.exports = (baseConfig, env, defaultConfig) => {
  /*
    This is a giant hack to override the index template used in generating the HTML
    for Storybook from the default configuration:

    https://github.com/storybooks/storybook/blob/7eca652b3cc68afe0003776f41e635251f0b885d/lib/core/src/server/config/webpack.config.dev.js#L46
  */
  const entriesMeta = {
    iframe: {
      headHtmlSnippet: getPreviewHeadHtml(require.resolve("."), process.env),
      bodyHtmlSnippet: getPreviewBodyHtml(),
    },
    manager: {
      headHtmlSnippet: getManagerHeadHtml(require.resolve("."), process.env),
    },
  };
  const entries = defaultConfig.entry;
  const plugins = [
    ...Object.keys(entries).map(
      e =>
        new HtmlWebpackPlugin({
          filename: `${e === 'manager' ? 'index' : e}.html`,
          excludeChunks: Object.keys(entries).filter(i => i !== e),
          chunksSortMode: 'none',
          alwaysWriteToDisk: true,
          inject: false,
          templateParameters: (compilation, files, options) => ({
            compilation,
            files,
            options,
            version,
            ...entriesMeta[e],
          }),
          template: INDEX_TEMPLATE,
        })
    ),
    ...defaultConfig
      .plugins
      .filter(p => p.constructor.name !== "GeneratePagePlugin")
  ];

  return Object.assign(
    defaultConfig,
    { plugins },
  );
};
