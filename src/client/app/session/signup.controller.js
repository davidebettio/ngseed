(function () {
  'use strict';

  angular
    .module('ngseed.session')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['$auth'];

  /* @ngInject */
  function SignupController($auth) {
    var vm = this;
    vm.user = {};
    vm.error = false;
    vm.signup = signup;

    activate();

    function activate() {

    }

    function signup() {
      vm.error = false;
      $auth.signup(vm.user)
        .then(function (response) {

        })
        .catch(function (response) {
          vm.error = true;
        });
    }
  }
})();
