'use strict';

var gulp = require('gulp');
var config = require('../gulp.config')();
var libs = require('../gulp.libs');
var $ = require('gulp-load-plugins')();
var paths = gulp.paths;

gulp.task('wiredep', function() {
  libs.log('Wire up bower css/js and app js into html');

  var options = config.getWiredepDefaultOptions();
  var wiredep = require('wiredep').stream;

  return gulp
    .src(config.index)
    .pipe(wiredep(options))
    .pipe($.inject(gulp.src(config.js).pipe($.angularFilesort())))
    .pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep', 'styles'], function() {
  libs.log('Wire up app css into html');

  return gulp
    .src(config.index)
    .pipe($.inject(gulp.src(config.css)))
    .pipe(gulp.dest(config.client));
});

// gulp.task('inject', function() {
//   $.util.log($.util.colors.blue('Inject bower files, js and css'));
//
//   var injectStyles = gulp.src([
//       paths.tmp + '/**/*.css',
//     ], { read: false }
//   );
//
//   var injectScripts = gulp.src([
//     paths.src + '/**/*.js',
//     '!' + paths.src + '/**/*.test.js',
//   ]).pipe(
//     $.angularFilesort().on('error', $.util.log)
//   );
//
//   var injectOptions = {
//     ignorePath: 'src',
//     addRootSlash: true,
//   };
//
//   var wiredepOptions = {
//     directory: 'bower_components',
//   };
//
//   return gulp.src(paths.src + '/index.html')
//     .pipe($.inject(injectStyles, injectOptions))
//     .pipe($.inject(injectScripts, injectOptions))
//     .pipe(wiredep(wiredepOptions))
//     .pipe(gulp.dest(paths.tmp));
// });
