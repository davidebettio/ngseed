'use strict';

var del = require('del');
var $ = require('gulp-load-plugins')();

module.exports = {
  clean: clean,
  log: log,
};

function clean(path, done) {
  log('Cleaning ' + $.util.colors.blue(path));
  del(path);
  return done();
}

function log(msg) {
  if (typeof msg === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}
