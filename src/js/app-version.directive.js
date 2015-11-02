;(function () {
  'use strict'

  angular
    .module('ngseed')
    .directive('appVersion', appVersion)

  appVersion.$inject = ['version']
  function appVersion (version) {
    return {
      restrict: 'E',
      replace: true,
      template: '<span>' + version + '</span>'
    }
  }
})()
