const { merge } = require("webpack-merge");

const common = require("./webpack.base");

/**
 * @type {import('webpack').Configuration}
 * production 里面包含了 tree shaking 和 压缩
 */
module.exports = merge(common, {
  mode: "production",
});
