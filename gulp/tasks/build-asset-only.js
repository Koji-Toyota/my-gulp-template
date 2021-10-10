const gulp = require("gulp");
const config = require("../config");

gulp.task(
  "build-asset-only",
  gulp.series(
    "mkdir",
    "clean",
    gulp.parallel("style", "script", "copy")
  ),
  (done) => {
    done();
  }
);
