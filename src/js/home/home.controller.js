(function () {
  'use strict';

  angular
    .module('ngseed.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$http', '$log'];
  function HomeController ($http, $log) {
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
