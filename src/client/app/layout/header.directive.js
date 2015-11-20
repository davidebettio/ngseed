(function () {
  'use strict';

  angular
    .module('ngseed.layout')
    .directive('header', header);

  function header() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/layout/header.tpl.html',
      scope: {},
      link: linkFunc,
      controller: HeaderController,
      controllerAs: 'vm',
      bindToController: true,
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
  }

  HeaderController.$inject = ['$location', '$auth'];

  function HeaderController($location, $auth) {
    var vm = this;
    vm.isActive = isActive;
    vm.isAuthenticated = isAuthenticated;
    vm.logout = logout;

    activate();

    function activate() {

    }

    function isActive(viewLocation) {
      return viewLocation === $location.path();
    }

    function isAuthenticated() {
      return $auth.isAuthenticated();
    }

    function logout() {
      $auth.logout();
    }
  }
})();
