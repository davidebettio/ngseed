;(function () {
  'use strict'

  angular
    .module('ngseed.home')
    .controller('HomeController', HomeController)

  HomeController.$inject = ['$http']
  function HomeController ($http) {
    var vm = this

    activate()

    function activate () {
      vm.testvar = ''
      vm.getMyIP = function () {
        $http.get('http://httpbin.org/ip').then(function (response) {
          console.log(response.data)
        })
      }
    }
  }
})()
