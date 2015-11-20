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

        // resolve: {
        //   authenticated: function($auth, $state, $q) {
        //     var deferred = $q.defer();
        //     if ($auth.isAuthenitcated()) {
        //       deferred.reject();
        //       $state.go('/home');
        //     }
        //
        //     return deferred.promise;
        //   },
        // },
      }).state('logout', {
        url: '/logout',
        controller: function($state, $auth) {
          $auth.logout();
          $state.go('home');
        },
      }).state('signup', {
        url: '/signup',
        controller: 'SignupController',
        controllerAs: 'vm',
        templateUrl: 'app/session/signup.tpl.html',
      });
  }
})();
