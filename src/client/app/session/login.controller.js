(function () {
  'use strict';

  angular
    .module('ngseed.session')
    .controller('LoginController', LoginController);

  LoginController.$inject = [];

  /* @ngInject */
  function LoginController() {
    var vm = this;

    activate();

    function activate() {

    }
  }
})();
