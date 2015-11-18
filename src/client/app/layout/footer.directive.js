(function() {
  'use strict';

  angular
    .module('ngseed.layout')
    .directive('footer', footer);

  function footer() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/layout/footer.tpl.html',
      scope: {
      },
      link: linkFunc,
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true,
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
  }

  FooterController.$inject = ['$log'];

  function FooterController($log) {
    var vm = this;

    activate();

    function activate() {
      $log.info('footer controller');
    }
  }
})();
