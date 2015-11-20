(function() {
  'use strict';

  angular
    .module('ngseed.home')
    .controller('HomeController', HomeController);

  function HomeController($http, $state) {
    var vm = this;
    vm.getMyIP = getMyIP;
    vm.testLocalServer = testLocalServer;
    vm.myIp = '';
    vm.customers = [];

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
