(function () {
  'use strict';

  angular.module('ngseed', [
    'ui.router',
    'angular-loading-bar',
    'ngAnimate',
    'ngseed.home'
  ])
    .value('version', '0.0.1')
    .config(config);

  config.$inject = ['$urlRouterProvider', 'cfpLoadingBarProvider'];
  function config ($urlRouterProvider, cfpLoadingBarProvider) {
    // default state
    $urlRouterProvider.otherwise('/home');

    // loading bar
    cfpLoadingBarProvider.includeSpinner = false;
  }
})();
