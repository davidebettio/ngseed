(function() {
  'use strict';

  angular
    .module('ngseed.home')
    .controller('HomeController', HomeController);

  function HomeController($http, $state) {
    var vm = this;
    vm.myIp = '';
    vm.customers = [];
    vm.getMyIP = getMyIP;
    vm.testLocalServer = testLocalServer;

    activate();

    function activate() {
    }

    function getMyIP() {
      $http.get('http://httpbin.org/ip').then(function(response) {
        vm.myIp = response.data.origin;
      });
    }

    function testLocalServer() {
      $http.get('api/customers', { cache: true}).then(function(response) {
        vm.customers = response.data;
      });
    }

  }
})();
