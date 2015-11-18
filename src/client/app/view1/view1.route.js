(function() {
  'use strict';

  angular
    .module('ngseed.view1')
    .config(route);

  function route($stateProvider) {
    $stateProvider
      .state('view1', {
        url: '/view1',
        controller: 'View1Controller',
        controllerAs: 'vm',
        templateUrl: 'app/view1/view1.html',
      });
  }
})();
