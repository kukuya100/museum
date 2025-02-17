const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: {
      main: "./src/index.ts",
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          phaser: {
            test: /[\\/]node_modules[\\/]phaser[\\/]/,
            name: "phaser",
            chunks: "all",
          },
          phasereditor2d: {
            test: /[\\/]node_modules[\\/]@phasereditor2d[\\/]/,
            name: "phasereditor2d",
            chunks: "all",
          },
        },
      },
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name]-[contenthash].bundle.js",
      assetModuleFilename: "asset-packs/[name]-[hash][ext][query]",
      publicPath: isProduction ? "./" : "/",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.json/,
          type: "asset/resource",
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
      historyApiFallback: true,
      allowedHosts: "all",
      static: [
        {
          directory: path.resolve(__dirname, "./dist"),
        },
        {
          directory: path.resolve(__dirname, "./static"),
          publicPath: "/static",
        },
      ],
      open: true,
      hot: true,
      port: 8080,
      setupMiddlewares: (middlewares, devServer) => {
        devServer.app.get("/survey.html", (req, res) => {
          res.sendFile(path.join(__dirname, "static/survey.html"));
        });
        return middlewares;
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src/index.html"),
        minify: false,
      }),
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: "static",
            globOptions: {
              // asset pack files are imported in code as modules
              ignore: ["**/publicroot", "**/*-pack.json"],
            },
          },
        ],
      }),
      new webpack.HotModuleReplacementPlugin(),
      new Dotenv(),
    ],
  };
};
