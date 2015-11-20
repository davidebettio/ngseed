(function() {
  'use strict';

  angular
    .module('ngseed.session')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$auth', '$state'];

  /* @ngInject */
  function LoginController($auth, $state) {
    var vm = this;
    vm.email = '';
    vm.password = '';
    vm.error = false;
    vm.login = login;

    activate();

    function activate() {

    }

    function login() {
      vm.error = false;
      $auth.login({
          email: vm.email,
          password: vm.password,
        })
        .then(function(response) {
          $state.go('home');
        })
        .catch(function(response) {
          vm.error = true;
        });
    }
  }
})();
