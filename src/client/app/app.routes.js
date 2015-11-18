(function() {
  'use strict';

  angular
    .module('ngseed')
    .config(routes);

  function routes($urlRouterProvider) {
    // default state
    $urlRouterProvider.otherwise('/view1');
  }
})();
