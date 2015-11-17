'use strict';

var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var plugins = require('gulp-load-plugins')();
var paths = gulp.paths;

gulp.task('inject', function () {

  var injectStyles = gulp.src([
      paths.tmp + '/**/*.css'
    ], { read: false }
  );

  var injectScripts = gulp.src([
    paths.src + '/**/*.js',
    '!' + paths.src + '/**/*.test.js'
  ]).pipe(
    plugins.angularFilesort().on('error', plugins.util.log)
  );

  var injectOptions = {
    ignorePath: 'src',
    addRootSlash: true
  };

  var wiredepOptions = {
    directory: 'bower_components'
  };

  return gulp.src(paths.src + '/index.html')
    .pipe(plugins.inject(injectStyles, injectOptions))
    .pipe(plugins.inject(injectScripts, injectOptions))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest(paths.tmp));
});
