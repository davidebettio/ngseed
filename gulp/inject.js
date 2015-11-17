'use strict';

var gulp = require('gulp');
var angularFilesort = require('gulp-angular-filesort');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var util = require('gulp-util');
var paths = gulp.paths;

gulp.task('inject', function() {

  var injectStyles = gulp.src([
      paths.tmp + '/**/*.css',
    ], { read: false }
  );

  var injectScripts = gulp.src([
    paths.src + '/**/*.js',
    '!' + paths.src + '/**/*.test.js',
  ]).pipe(
    angularFilesort().on('error', util.log)
  );

  var injectOptions = {
    ignorePath: 'src',
    addRootSlash: true,
  };

  var wiredepOptions = {
    directory: 'bower_components',
  };

  return gulp.src(paths.src + '/index.html')
    .pipe(inject(injectStyles, injectOptions))
    .pipe(inject(injectScripts, injectOptions))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest(paths.tmp));
});
