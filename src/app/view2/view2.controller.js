(function () {
  'use strict';

  angular
    .module('ngseed.view2')
    .controller('View2Controller', View2Controller);

  function View2Controller ($http, $log) {
    var vm = this;

    activate();

    function activate () {
      vm.testvar = '';
      vm.getMyIP = function () {
        $http.get('http://httpbin.org/ip').then(function (response) {
          $log.info(response.data);
        });
      };
    }
  }
})();
