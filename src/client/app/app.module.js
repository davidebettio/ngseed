(function() {
  'use strict';

  angular
    .module('ngseed', [
      'ui.router',
      'angular-loading-bar',
      'ngAnimate',
      'ngseed.layout',
      'ngseed.home',
      'ngseed.about',
      'ngseed.session',
      'satellizer',
    ]);

})();
