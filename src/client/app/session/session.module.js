(function() {
  'use strict';

  angular
    .module('ngseed.session', [])
    .run(function($rootScope, $auth, $state) {
      $rootScope.$on('$stateChangeStart', function(event, toState) {
        if (toState.requireAuth && !$auth.isAuthenticated()) {
          event.preventDefault();
          return $state.go('login');
        }
      });
    });

})();
