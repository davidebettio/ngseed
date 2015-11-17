'use strict';

var gulp = require('gulp');
var wiredep = require('wiredep');
var plugins = require('gulp-load-plugins')();
var del = require('del');
var paths = gulp.paths;

gulp.task('clean', function () {
    del([paths.dist, paths.tmp]);
});
