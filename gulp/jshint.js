'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var paths = gulp.paths;

gulp.task('jshint', function () {
    gulp.src(paths.src + '/**/*.js')
        .pipe(plugins.jshint('.jshintrc'))
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});
