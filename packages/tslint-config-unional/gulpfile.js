var gulp = require('gulp');
var tslint = require('gulp-tslint');

gulp.task('tslint-positive', () => {
  return gulp.src('spec/*.pass.ts')
    .pipe(tslint({
      rulesDirectory: "node_modules/tslint-eslint-rules/dist/rules"
    }))
    .pipe(tslint.report('verbose'));
});

gulp.task('tslint', ['tslint-positive']);

gulp.task('default', ['tslint']);
