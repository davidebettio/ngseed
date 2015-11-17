'use strict';

var gulp = require('gulp');
var util = require('gulp-util');
var taskListing = require('gulp-task-listing');

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  index: 'src/index.html',
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function() {
  util.log(util.colors.blue('default task'));
});

gulp.task('help', taskListing);
