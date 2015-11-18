'use strict';

var gulp = require('gulp');
var config = require('../gulp.config')();
var libs = require('../gulp.libs');
var $ = require('gulp-load-plugins')();
var args = require('yargs').argv;

gulp.task('styles', ['clean-styles'], function() {
  libs.log('Compile LESS to CSS');

  gulp.src(config.less)
  .pipe($.if(args.verbose, $.print()))
  .pipe($.plumber())
  .pipe($.less())
  .pipe($.autoprefixer())
  .pipe(gulp.dest(config.temp));
});

gulp.task('clean-styles', function(done) {
  var files = config.temp + '**/*.css';
  libs.clean(files, done);
});

gulp.task('less-watcher', function() {
  gulp.watch([config.less], ['styles']);
});
