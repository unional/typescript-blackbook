var gulp = require('gulp');
var tslint = require('gulp-tslint');
var through = require('through');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

gulp.task('tslint-positive', function() {
  return gulp.src('spec/*.pass.ts')
    .pipe(tslint({
      rulesDirectory: "node_modules/tslint-eslint-rules/dist/rules"
    }))
    .pipe(tslint.report('verbose'));
});

gulp.task('tslint-negative', function() {
  return gulp.src('spec/*.fail.ts')
    .pipe(tslint({
      rulesDirectory: "node_modules/tslint-eslint-rules/dist/rules"
    }))
    .pipe((function() {
      var hasError = false;
      return through(function(file) {
        if (file.tslint.failureCount === 0) {
          gutil.log(
            `[${gutil.colors.cyan('gulp-tslint')}]`,
            gutil.colors.red('error'),
            `(negative) ${file.relative}`);
          hasError = true;
        }
      }, function() {
        if (hasError) {
          this.emit('error', new PluginError('gulp-tslint', 'Failed negative test(s).'));
        } else {
          this.emit('end');
        }
      });
    })());
});

gulp.task('tslint', ['tslint-positive', 'tslint-negative']);

gulp.task('default', ['tslint']);
