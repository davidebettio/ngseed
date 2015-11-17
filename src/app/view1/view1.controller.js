(function() {
  'use strict';

  angular
    .module('ngseed.view1')
    .controller('View1Controller', View1Controller);

  function View1Controller($http, $log) {
    var vm = this;

    activate();

    function activate() {
      vm.testvar = '';
      vm.getMyIP = function() {
        $http.get('http://httpbin.org/ip').then(function(response) {
          $log.info(response.data);
        });
      };
    }
  }
})();
