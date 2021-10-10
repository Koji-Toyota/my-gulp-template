const path = require('path');
const config = require("./config");
/*const TerserPlugin = require('terser-webpack-plugin');*/

module.exports = {
  mode: "production",
  entry: path.join(__dirname, '../', config.script.global.src),
  output: {
    filename: config.script.global.name,
    path: path.join(__dirname, '../', config.script.global.dest),
  },
  /*optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
          terserOptions: {
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 4,
            },
            output: {
              comments: false,
            },
          },
      }),
    ],
  },*/
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
    ],
  },
};
