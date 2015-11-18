(function() {
  'use strict';

  angular
    .module('ngseed.view1')
    .controller('View1Controller', View1Controller);

  function View1Controller($http, $log) {
    var vm = this;

    activate();

    function activate() {
      console.log('activate');
      vm.testvar = '';
      vm.getMyIP = function() {
        $http.get('http://httpbin.org/ip').then(function(response) {
          $log.info(response.data);
        });
      };

      vm.testLocalServer = function() {
        $http.get('api/sample').then(function(response) {
          $log.info(response.data);
        });
      };
    }
  }
})();
