const gulp = require("gulp");
const config = require("../config");

const webpackStream = require("webpack-stream");
const webpack = require("webpack");

const webpackConfig = {
  global: require("../webpack.config-global"),
  gift: require("../webpack.config-gift"),
};

// 汎用のスクリプト
gulp.task("script-global", (done) => {
  return webpackStream(webpackConfig.global, webpack).pipe(
    gulp.dest(config.script.global.dest)
  );
});

// giftのスクリプト
gulp.task("script-gift", (done) => {
  return webpackStream(webpackConfig.gift, webpack).pipe(
    gulp.dest(config.script.gift.dest)
  );
});

gulp.task(
  "script",
  gulp.series(gulp.parallel("script-global","script-gift")),
  (done) => {
    done();
  }
);
