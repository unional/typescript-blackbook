var gulp = require('gulp');
var tslint = require('gulp-tslint');
var through = require('through2');

gulp.task('tslint-positive', function () {
  return gulp.src('spec/*.pass.ts')
    .pipe(tslint({
      rulesDirectory: "node_modules/tslint-eslint-rules/dist/rules"
    }))
    .pipe(tslint.report('verbose'));
});

gulp.task('tslint-negative', function () {
  return gulp.src('spec/*.fail.ts')
    .pipe(tslint({
      rulesDirectory: "node_modules/tslint-eslint-rules/dist/rules"
    }))
    .pipe(through.obj(function(chunk, encode, callback) {
      // Need some help here.
      console.log(chunk);
      callback();
    }));
});

gulp.task('tslint', ['tslint-positive']);

gulp.task('default', ['tslint']);
