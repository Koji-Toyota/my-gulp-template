const gulp = require("gulp");
const config = require("../config");

const scss = require("gulp-dart-sass");
const autoprefixer = require("gulp-autoprefixer");

// 本サイトのスタイル
gulp.task("style-main", (done) => {
  return gulp
    .src(config.style.main.src)
    .pipe(scss({ outputStyle: "expanded" }).on("error", scss.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest(config.style.main.dest));
});

// スタイルをまとめてコンパイル
gulp.task(
  "style",
  gulp.series(gulp.parallel("style-main")),
  (done) => {
    done();
  }
);
