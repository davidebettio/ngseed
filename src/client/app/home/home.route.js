(function() {
  'use strict';

  angular
    .module('ngseed.home')
    .config(route);

  function route($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeController',
        controllerAs: 'vm',
        templateUrl: 'app/home/home.tpl.html',
      });
  }
})();
