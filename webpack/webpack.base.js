const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// __dirname 指的是当前文件夹的地址，entry 的地址指的是 cli 的 --config 地址
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./src/index.tsx",
  // main: path.join(__dirname, 'src/index.js'), // 指定入口，可以指定多个。参考webpack文档
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle-[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // 一定要这么引入，不然会报错
          },
          "css-loader",
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        use: "babel-loader",
        exclude: /node-modules/,
      },
    ],
  },
  resolve: {
    // 别名配置
    extensions: [".js", ".css", ".ts", ".tsx"],
    alias: {
      ":": "./src",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
};
