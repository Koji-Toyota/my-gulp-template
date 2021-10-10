const gulp = require('gulp');
const config = require('../config');

gulp.task('mkdir', () => {
  return gulp.src('*.*', {read: false})
      .pipe(gulp.dest(config.destDir))
});
