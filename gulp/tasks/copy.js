const gulp = require("gulp");
const config = require("../config");

// サイトの画像類をコピー
gulp.task("copy-main", () => {
  return gulp
    .src(config.copy.main.src)
    .pipe(gulp.dest(config.copy.main.dest));
});

// jsライブラリー類をコピー
gulp.task("copy-lib", () => {
  return gulp
    .src(config.copy.lib.src)
    .pipe(gulp.dest(config.copy.lib.dest));
});

// 画像類をまとめてコピー
gulp.task(
  "copy",
  gulp.series(gulp.parallel("copy-main","copy-lib")),
  (done) => {
    done();
  }
);
