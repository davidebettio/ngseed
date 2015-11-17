'use strict';

var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var stylish = require('gulp-jscs-stylish');
var util = require('gulp-util');
var paths = gulp.paths;

gulp.task('vet', function() {
  util.log(util.colors.blue('Analyze with JSHint and JSCS'));

  gulp.src([
    paths.src + '/**/*.js',
    './*.js',
  ])
  .pipe(jshint())
  .pipe(jscs())
  .pipe(stylish.combineWithHintResults())
  .pipe(jshint.reporter('jshint-stylish', {verbose:true}));
});
