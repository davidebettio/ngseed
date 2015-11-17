'use strict';

var gulp = require('gulp');
var del = require('del');
var util = require('gulp-util');
var paths = gulp.paths;

gulp.task('build', function() {
  util.log(util.colors.blue('ok'));
});

gulp.task('clean', function() {
  return del([
    paths.dist,
    paths.tmp,
  ]);
});
