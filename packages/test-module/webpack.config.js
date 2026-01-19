const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  const publicPath = isProduction
    ? process.env.TEST_MODULE_URL || "https://your-test-module.netlify.app/"
    : "http://localhost:3001/";
  return {
    // entry: "./src/main.tsx", // Remove if not running standalone
    entry: "./src/main.tsx", // Or keep this as the entry
    mode: isProduction ? "production" : "development",
    devServer: {
      port: 3001,
      hot: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      historyApiFallback: true,
    },
    output: {
      publicPath: publicPath,
      clean: true,
      filename: "[name].[contenthash].js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-react", { runtime: "automatic" }],
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "testModule",
        filename: "remoteEntry.js",
        exposes: {
          "./TestPage": "./src/index.ts",
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: "^18.3.1",
            eager: false,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: "^18.3.1",
            eager: false,
          },
          "framer-motion": {
            singleton: true,
            requiredVersion: "^11.14.4",
            eager: false,
          },
          "react-router-dom": {
            singleton: true,
            requiredVersion: "^7.0.2",
            eager: false,
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        title: "Test Module - MFE",
      }),
    ],
  };
};
