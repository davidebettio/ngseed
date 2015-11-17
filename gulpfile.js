'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  index: 'src/index.html',
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function() {
  console.log('ok');
});

gulp.task('help', plugins.taskListing);

// var paths = {
//   html: ['./src/app/**/*.html'],
//   js: ['./src/app/**/*.js'],
//   css: ['./src/css/**/*.css'],
//   index: './src/index.html',
//   src: './src',
//   dist: './dist'
// };
//
// gulp.task('inject', function () {
//   var target = gulp.src(paths.index);
//   var bowerSources = gulp.src($.mainBowerFiles(), {read: false});
//   var appSources = gulp.src(paths.js);
//   var cssSources = gulp.src(paths.css);
//
//   return target
//     // .pipe($.inject(bowerSources, {name: 'bower', ignorePath: 'src'}))
//     // .pipe($.inject(appSources.pipe($.angularFilesort()), {ignorePath: 'src'}))
//     // .pipe($.inject(cssSources, {ignorePath: 'src'}))
//     .pipe($.inject(bowerSources, {name: 'bower'}))
//     .pipe($.inject(appSources.pipe($.angularFilesort())))
//     .pipe($.inject(cssSources))
//     .pipe(gulp.dest(paths.src))
//     .pipe($.connect.reload());
// });
//
// gulp.task('watch', function () {
//   gulp.watch('./bower.json', ['inject']);
//   gulp.watch(paths.js, ['inject']);
//   gulp.watch(paths.html, function () {
//     gulp.src(paths.html).pipe($.connect.reload());
//   });
// });
//
// gulp.task('serve', function () {
//   $.connect.server({
//     root: paths.src,
//     livereload: true,
//     port: 8000
//   });
// });
//
// gulp.task('clean', function () {
//   return $.del(paths.dist);
// });
//
// gulp.task('build', function () {
//     return gulp.src(paths.js)
//         .pipe($.ngAnnotate())
//         .pipe(gulp.dest('dist'));
// });
//
// gulp.task('default', ['inject', 'serve', 'watch']);
