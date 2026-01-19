const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const testModuleUrl = isProduction
    ? process.env.TEST_MODULE_URL ||
      "https://your-test-module.netlify.app/remoteEntry.js"
    : "testModule@http://localhost:3001/remoteEntry.js";
  return {
    entry: "./src/main.tsx",
    mode: isProduction ? "production" : "development",
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true,
      open: true,
    },
    output: {
      publicPath: isProduction ? "/" : "http://localhost:3000/",
      clean: true,
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
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
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [require("tailwindcss"), require("autoprefixer")],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|pdf|webp)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "hostApp",
        remotes: {
          testModule: testModuleUrl,
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
          },
          "react-router-dom": {
            singleton: true,
            requiredVersion: "^7.0.2",
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "Hariharan Mohan - Portfolio",
      }),
    ],
  };
};
