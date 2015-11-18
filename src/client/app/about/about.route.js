(function() {
  'use strict';

  angular
    .module('ngseed.about')
    .config(route);

  function route($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        controller: 'AboutController',
        controllerAs: 'vm',
        templateUrl: 'app/about/about.tpl.html',
      });
  }
})();
