'use strict';

var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var plugins = require('gulp-load-plugins')();
var paths = gulp.paths;

// gulp.task('inject', function () {
//   var target = gulp.src(paths.index);
//   var bowerSources = gulp.src(plugins.mainBowerFiles(), {read: false});
//   var appSources = gulp.src(paths.src + '/app/**/*.js');
//   var cssSources = gulp.src(paths.src + '/css/**/*.css');
//
//   return target
//     // .pipe(plugins.inject(bowerSources, {name: 'bower', ignorePath: 'src'}))
//     // .pipe(plugins.inject(appSources.pipe(plugins.angularFilesort()), {ignorePath: 'src'}))
//     // .pipe(plugins.inject(cssSources, {ignorePath: 'src'}))
//     .pipe(plugins.inject(bowerSources, {name: 'bower'}))
//     .pipe(plugins.inject(appSources.pipe(plugins.angularFilesort())))
//     .pipe(plugins.inject(cssSources))
//     .pipe(gulp.dest(paths.tmp));
// });

gulp.task('inject', function () {

  var injectStyles = gulp.src([
      // selects all css files from the .tmp dir
      paths.tmp + '/**/*.css'
    ], { read: false }
  );

  var injectScripts = gulp.src([
    // selects all js files from .tmp dir
    paths.src + '/**/*.js',
    // but ignores test files
    '!' + paths.src + '/**/*.test.js'
    // then uses the gulp-angular-filesort plugin
    // to order the file injection
  ]).pipe(plugins.angularFilesort()
          .on('error', plugins.util.log));

  var injectOptions = {ignorePath: 'src', addRootSlash: true};
  // tell wiredep where your bower_components are
  var wiredepOptions = {
    directory: 'bower_components'
  };

  return gulp.src(paths.src + '/*.html')
    .pipe(plugins.inject(injectStyles, injectOptions))
    .pipe(plugins.inject(injectScripts, injectOptions))
    .pipe(wiredep(wiredepOptions))
    // write the injections to the .tmp/index.html file
    .pipe(gulp.dest(paths.tmp));
    // so that src/index.html file isn't modified
    // with every commit by automatic injects

});
