(function() {
  'use strict';

  angular
    .module('ngseed')
    .value('version', '0.0.1')
    .config(config);

  function config(cfpLoadingBarProvider) {
    // loading bar
    cfpLoadingBarProvider.includeSpinner = false;
  }
})();
