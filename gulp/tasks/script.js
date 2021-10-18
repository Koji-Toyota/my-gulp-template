const gulp = require("gulp");
const config = require("../config");

const webpackStream = require("webpack-stream");
const webpack = require("webpack");

const webpackConfig = {
  global: require("../webpack.config-global"),
  /*slider: require("../webpack.config-slider"),*/
};

// 汎用のスクリプト
gulp.task("script-global", (done) => {
  return webpackStream(webpackConfig.global, webpack).pipe(
    gulp.dest(config.script.global.dest)
  );
});

gulp.task(
  "script",
  gulp.series(gulp.parallel("script-global")),
  (done) => {
    done();
  }
);
