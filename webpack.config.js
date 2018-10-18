const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const processEnv = {
  NODE_ENV: process.env.NODE_ENV || "production",
};
Object.keys(processEnv).forEach(key => {
  processEnv[key] =  JSON.stringify(process.env[key]);
});

module.exports = {
  entry: {
    index: "./components/index",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].chunk.js",
    filename: "[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({ "process.env": processEnv }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [
                [
                  "@babel/preset-env", {
                    targets: ["last 2 versions"],
                    modules: false,
                  },
                ],
                "@babel/preset-react",
              ],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-proposal-class-properties",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.(ttf|woff|eot)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              hash: "sha512",
              digest: "hex",
              name: "fonts/[name]-[hash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              hash: "sha512",
              digest: "hex",
              name: "images/[name]-[hash].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },
};
