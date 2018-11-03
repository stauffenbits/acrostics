'use strict';

angular
  .module('acrosticApp')
  .config(['$routeProvider',
    function config($routeProvider){
      $routeProvider
        .when('intro', {
          templateUrl: 'app/t/intro.t.html',
          controller: 'IntroCtrl'
        })
        .when('acrostic', {
          template: '<acrostic></acrostic>'
        })
        .otherwise('/intro');
    }]);
