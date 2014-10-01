var coffee = require("gulp-coffee");
var requireSugar = require("require-sugar");
var gulp = require("gulp");

gulp.task("coffee", function() {
  gulp.src("./src/*.coffee")
    .pipe(requireSugar())
    .pipe(coffee())
    .pipe(gulp.dest("./lib/"))
});

gulp.task('default', ['coffee']);
