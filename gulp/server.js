'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var util = require('util');
var paths = gulp.paths;

function browserSyncInit(baseDir, files) {

  var routes = null;
  if (baseDir === 'src' || (util.isArray(baseDir) && baseDir.indexOf('src') !== -1)) {
    routes = {
      '/bower_components': 'bower_components',
    };
  }

  browserSync.instance = browserSync.init({
    files: files,
    startPath: '/',
    server: {
      baseDir: baseDir,
      routes: routes,
    },
  });
}

gulp.task('watch', ['inject'], reload);

gulp.task('nodemon', [], function() {
  nodemon({
    script: 'server.js',
    ext: 'js html',
    env: { NODE_ENV: 'development' },
  });
});

gulp.task('serve', ['inject'], function() {
  browserSyncInit([
    paths.tmp,
    paths.src,
  ]);

  gulp.watch([
    paths.src + '/**/*.css',
    paths.src + '/**/*.js',
    paths.src + '/**/*.html',
  ], ['watch']);
});

gulp.task('serve:dist', ['build'], function() {
  browserSyncInit(paths.dist);
});
