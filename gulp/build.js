'use strict';

var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();
var paths = gulp.paths;

gulp.task('build', function() {
  $.util.log($.util.colors.blue('Start building'));
});

gulp.task('clean', function() {
  $.util.log($.util.colors.blue('Clean .tmp and dist folders'));
  return del([
    paths.dist,
    paths.tmp,
  ]);
});
