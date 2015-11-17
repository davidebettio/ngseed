'use strict';

var gulp = require('gulp');
var util = require('gulp-util');
var angularFilesort = require('gulp-angular-filesort');
var inject = require('gulp-inject');
var wiredep = require('wiredep');
var del = require('del');
var taskListing = require('gulp-task-listing');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var stylish = require('gulp-jscs-stylish');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  index: 'src/index.html',
};

gulp.task('default', ['clean'], function() {
  util.log(util.colors.blue('ok'));
});

gulp.task('help', taskListing);

gulp.task('vet', function() {
  gulp.src([
    paths.src + '/**/*.js',
    './*.js',
  ])
  .pipe(jshint())
  .pipe(jscs())
  .pipe(stylish.combineWithHintResults())
  .pipe(jshint.reporter('jshint-stylish', {verbose:true}));
});

gulp.task('build', function() {
  util.log(util.colors.blue('ok'));
});

gulp.task('clean', function() {
  return del([
    paths.dist,
    paths.tmp,
  ]);
});

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

gulp.task('watch', ['inject'], reload);

gulp.task('serve:dist', ['build'], function() {
  browserSyncInit(paths.dist);
});
