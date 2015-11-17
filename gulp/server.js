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

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(paths.dist);
});
