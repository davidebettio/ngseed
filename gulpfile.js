var gulp = require('gulp')
var inject = require('gulp-inject')
var angularFilesort = require('gulp-angular-filesort')
var mainBowerFiles = require('main-bower-files')
// var filelog = require('gulp-filelog')
var connect = require('gulp-connect')

gulp.task('inject', function () {
  var target = gulp.src('./src/index.html')
  var bowerSources = gulp.src(mainBowerFiles(), {read: false})
  var appSources = gulp.src('./src/js/**/*.js')
  var cssSources = gulp.src('./src/css/**/*.css')

  return target
    .pipe(inject(bowerSources, {name: 'bower', ignorePath: 'src'}))
    .pipe(inject(appSources.pipe(angularFilesort()), {ignorePath: 'src'}))
    .pipe(inject(cssSources, {ignorePath: 'src'}))
    .pipe(gulp.dest('./src'))
    .pipe(connect.reload())
})

gulp.task('watch', function () {
  gulp.watch(['./src/js/**/*.js', './bower.json'], ['inject'])
  gulp.watch('./src/**/*.html', function (event) {
    gulp.src('./src/**/*.html').pipe(connect.reload())
  })
})

gulp.task('serve', function () {
  connect.server({
    root: './src',
    livereload: true,
    port: 8000
  })
})

gulp.task('default', ['inject', 'serve', 'watch'])
