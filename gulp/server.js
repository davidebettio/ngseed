'use strict';

var gulp = require('gulp');
var config = require('../gulp.config')();
var libs = require('../gulp.libs');
var $ = require('gulp-load-plugins')();
var util = require('util');
var browserSync = require('browser-sync');
var paths = gulp.paths;
var port = process.env.PORT || config.defaultPort;

gulp.task('serve-dev', ['inject'], function() {
  libs.log('serve-dev');

  var isDev = true;
  var nodeOptions = {
    script: config.nodeServer,
    delayTime: 1,
    env: {
      PORT: port,
      NODE_ENV: isDev ? 'dev' : 'build',
    },
    watch: [config.server],
  };

  return $.nodemon(nodeOptions)
    .on('restart', function(event) {
      libs.log('*** nodemon restarted');
      libs.log('files changed:\n' + event);
      setTimeout(function() {

      }, config.browserReloadDelay);
    })
    .on('start', function() {
      libs.log('*** nodemon started');
      startBrowserSync();
    })
    .on('crash', function() {
      libs.log('*** nodemon crashed');
    })
    .on('exit', function() {
      libs.log('*** nodemon exited');
    });
});

function startBrowserSync() {
  if (browserSync.active) {
    return;
  }

  libs.log('Starting browser-sync on port: ' + port);

  gulp.watch([config.less], ['styles'])
    .on('change', function(event) {
      libs.log('File ' + event.path + ' ' + event.type);
    });

  var options = {
    proxy: 'localhost:' + port,
    port: 3000,
    files: [
      config.client + '**/*.*',
      '!' + config.less,
      config.temp + '**/*.css',
    ],
    ghostMode: {
      clicks: true,
      location: false,
      forms: true,
      scroll: true,
    },
    injectChanges: true,
    logFileChanges: true,
    /* logLevel: 'debug', */
    logPrefix: 'gulp-patterns',
    notify: true,
    reloadDelay: 1000,
    open: false,
  };

  browserSync(options);
}
