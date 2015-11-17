'use strict';

var gulp = require('gulp');
var config = require('../gulp.config')();
var $ = require('gulp-load-plugins')();
var args = require('yargs').argv;

gulp.task('styles', function() {
  $.util.log($.util.colors.blue('Compile LESS to CSS'));

  gulp.src(config.less)
  .pipe($.if(args.verbose, $.print()))
  .pipe($.less())
  .pipe($.autoprefixer())
  .pipe(gulp.dest(config.temp));
});
