'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var args = require('yargs').argv;
var paths = gulp.paths;

gulp.task('vet', function() {
  $.util.log($.util.colors.blue('Analyze with JSHint and JSCS'));

  gulp.src([
    paths.src + '/**/*.js',
    './gulp/**/*.js',
    './*.js',
  ])
  .pipe($.if(args.verbose, $.print()))
  .pipe($.jshint())
  .pipe($.jscs())
  .pipe($.jscsStylish.combineWithHintResults())
  .pipe($.jshint.reporter('jshint-stylish', {verbose:true}))
  .pipe($.jshint.reporter('fail'));
});
