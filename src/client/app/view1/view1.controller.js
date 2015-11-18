(function() {
  'use strict';

  angular
    .module('ngseed.view1')
    .controller('View1Controller', View1Controller);

  function View1Controller($http) {
    var vm = this;

    activate();

    function activate() {
      vm.myIp = '';
      vm.customers = [];
      vm.getMyIP = function() {
        $http.get('http://httpbin.org/ip').then(function(response) {
          vm.myIp = response.data.origin;
        });
      };

      vm.testLocalServer = function() {
        $http.get('api/customers').then(function(response) {
          vm.customers = response.data;
        });
      };
    }
  }
})();
