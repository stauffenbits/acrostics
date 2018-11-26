'use strict';

angular
  .module('acrosticApp')
  .config(['$routeProvider',
    function config($routeProvider){
      $routeProvider
        .when('/intro', {
          template: '<intro></intro>'
        })
        .when('/acrostic', {
          template: '<acrostic-factory></acrostic-factory>'
        })
        .otherwise('/intro');
    }]);
