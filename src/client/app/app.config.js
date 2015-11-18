(function() {
  'use strict';

  angular
    .module('ngseed')
    .value('version', '0.0.1')
    .config(config);

  function config(cfpLoadingBarProvider, $locationProvider) {

    // loading bar
    cfpLoadingBarProvider.includeSpinner = true;

    // html5Mode
    $locationProvider.html5Mode(true);
  }
})();
