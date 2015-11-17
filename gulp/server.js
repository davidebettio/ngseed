'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plugins = require('gulp-load-plugins')();
var util = require('util');
var paths = gulp.paths;

function browserSyncInit(baseDir, files) {

  var routes = null;
  if (baseDir === 'src' || (util.isArray(baseDir) && baseDir.indexOf('src') !== -1)) {
    routes = {
      // Should be '/bower_components': '../bower_components'
      // Waiting for https://github.com/shakyShane/browser-sync/issues/308
      '/bower_components': 'bower_components'
    };
  }

  browserSync.instance = browserSync.init({
    files: files,
    startPath: '/',
    server: {
      baseDir: baseDir,
      routes: routes
    }
  });
}

// starts a development server
// runs preprocessor tasks before,
// and serves the src and .tmp folders
gulp.task('serve', ['inject'], function () {
  browserSyncInit([
    paths.tmp,
    paths.src
  ], [
    paths.src + '/**/*.css',
    paths.src + '/**/*.js',
    paths.src + '/**/*.html'
  ]);
});

// starts a production server
// runs the build task before,
// and serves the dist folder
gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(paths.dist);
});
