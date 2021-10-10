const gulp = require("gulp");
const config = require("../config");

gulp.task('clean', () => {
  const clean = require('gulp-clean');

  return gulp.src(config.destDir)
    .pipe(clean({force: true}))
})
