(function() {
  'use strict';

  angular
    .module('ngseed')
    .directive('appVersion', appVersion);

  appVersion.$inject = ['version'];
  function appVersion(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }
})();
