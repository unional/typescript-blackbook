var gulp = require('gulp');
var tslint = require('gulp-tslint');

gulp.task('tslint', function () {
  return gulp.src('spec/*.pass.ts')
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

gulp.task('default', ['tslint']);
