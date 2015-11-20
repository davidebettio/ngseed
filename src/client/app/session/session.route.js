(function() {
  'use strict';

  angular
    .module('ngseed.session')
    .config(route);

  function route($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        controller: 'LoginController',
        controllerAs: 'vm',
        templateUrl: 'app/session/login.tpl.html',
      });
  }
})();
