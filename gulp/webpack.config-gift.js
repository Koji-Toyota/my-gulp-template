const path = require('path');
const config = require("./config");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, '../', config.script.gift.src),
  output: {
    filename: config.script.gift.name,
    path: path.join(__dirname, '../', config.script.gift.dest),
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
