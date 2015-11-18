(function() {
  'use strict';

  angular
    .module('ngseed.view2')
    .config(route);

  function route($stateProvider) {
    $stateProvider
      .state('view2', {
        url: '/view2',
        controller: 'View2Controller',
        controllerAs: 'vm',
        templateUrl: './view2.tpl.html',
      });
  }
})();
