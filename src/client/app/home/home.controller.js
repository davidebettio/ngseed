(function() {
  'use strict';

  angular
    .module('ngseed.home')
    .controller('HomeController', HomeController);

  function HomeController($http, $state) {
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
        $http.get('api/customers', { cache: true}).then(function(response) {
          vm.customers = response.data;
        });
      };
    }
  }
})();
