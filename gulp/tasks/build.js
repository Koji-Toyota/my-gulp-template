const gulp = require("gulp");
const config = require("../config");

gulp.task(
  "build",
  gulp.series(
    "mkdir",
    "clean",
    gulp.parallel("template", "style", "script", "copy")
  ),
  (done) => {
    done();
  }
);
