;(function () {
  'use strict'

  angular
    .module('ngseed.home', [])
    .config(routeConfig)

  routeConfig.$inject = ['$stateProvider']
  function routeConfig ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeController',
        controllerAs: 'vm',
        templateUrl: 'views/home.html'
      })
  }
})()
