'use strict';

angular
  .module('acrosticApp')
  .component('intro', {
    templateUrl: '/app/t/intro.t.html',
    controller: function IntroCtrl(){
      console.log('IntroCtrl');
    }
  });
