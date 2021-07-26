const { merge } = require("webpack-merge");
const webpack = require("webpack");

const common = require("./webpack.base");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = merge(common, {
  mode: "development",
  // 可以直接在 F12 上查看到错误
  devtool: "eval-cheap-module-source-map",
  // watch和HMR是互斥的
  devServer: {
    // 设置 open 自动打开浏览器，hot 热启动
    port: 9000,
    open: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
