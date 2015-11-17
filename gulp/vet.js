'use strict';

var gulp = require('gulp');
var config = require('../gulp.config')();
var $ = require('gulp-load-plugins')();
var args = require('yargs').argv;

gulp.task('vet', function() {
  $.util.log($.util.colors.blue('Analyze with JSHint and JSCS'));

  gulp.src(config.alljs)
  .pipe($.if(args.verbose, $.print()))
  .pipe($.jshint())
  .pipe($.jscs())
  .pipe($.jscsStylish.combineWithHintResults())
  .pipe($.jshint.reporter('jshint-stylish', {verbose:true}))
  .pipe($.jshint.reporter('fail'));
});
