const gulp = require("gulp");
const config = require("../config");

gulp.task("watch-task", () => {
  gulp
    .watch(config.srcDir + "/**/*.ejs")
    .on("change", gulp.series("template"));
  gulp
    .watch(config.srcDir + "/**/*.scss")
    .on("change", gulp.series("style"));
  gulp
    .watch(config.srcDir + "/**/*.js")
    .on("change", gulp.series("script"));
  gulp
    .watch([config.srcDir + "/**/*.+(jpg|png|gif|svg|ico)", config.srcDir + "/**/**/*.+(jpg|png|gif|svg|ico)"])
    .on("change", gulp.series("copy"));
});

gulp.task("watch", gulp.series("build", "watch-task"), (done) => {
  done();
});