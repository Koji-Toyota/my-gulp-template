const gulp = require("gulp");
const config = require("../config");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");

// ベースejsをコンパイル
gulp.task("template-all", (done) => {
  const prettier = require("gulp-prettier");

  return gulp
    .src(config.srcDir + "/**/[^_]*.ejs")
    .pipe(ejs())
    .pipe(rename({ extname: ".html" }))
    .pipe(prettier())
    .pipe(gulp.dest(config.destDir));
});

// ejsをまとめてコンパイル
gulp.task(
  "template",
  gulp.series("template-all"),
  (done) => {
    done();
  }
);
