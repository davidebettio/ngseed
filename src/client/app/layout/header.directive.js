(function() {
  'use strict';

  angular
    .module('ngseed.layout')
    .directive('header', header);

  function header() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/layout/header.tpl.html',
      scope: {
      },
      link: linkFunc,
      controller: HeaderController,
      controllerAs: 'vm',
      bindToController: true,
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
  }

  HeaderController.$inject = ['$log'];

  function HeaderController($log) {
    var vm = this;

    activate();

    function activate() {
      $log.info('header controller');
    }
  }
})();
