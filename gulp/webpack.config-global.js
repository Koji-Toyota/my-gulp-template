const path = require('path');
const config = require("./config");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, '../', config.script.global.src),
  output: {
    filename: config.script.global.name,
    path: path.join(__dirname, '../', config.script.global.dest),
  },
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
