'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'del']
});

gulp.task('inject', function () {
  var target = gulp.src('./src/index.html');
  var bowerSources = gulp.src($.mainBowerFiles(), {read: false});
  var appSources = gulp.src('./src/js/**/*.js');
  var cssSources = gulp.src('./src/css/**/*.css');

  return target
    .pipe($.inject(bowerSources, {name: 'bower', ignorePath: 'src'}))
    .pipe($.inject(appSources.pipe($.angularFilesort()), {ignorePath: 'src'}))
    .pipe($.inject(cssSources, {ignorePath: 'src'}))
    .pipe(gulp.dest('./src'))
    .pipe($.connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/js/**/*.js', './bower.json'], ['inject']);
  gulp.watch('./src/**/*.html', function () {
    gulp.src('./src/**/*.html').pipe($.connect.reload());
  });
});

gulp.task('serve', function () {
  $.connect.server({
    root: './src',
    livereload: true,
    port: 8000
  });
});

gulp.task('clean', function () {
  return $.del([
    'dist/**/*'
  ]);
});

gulp.task('default', ['inject', 'serve', 'watch']);
