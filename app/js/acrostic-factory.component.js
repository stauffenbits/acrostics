'use strict';

angular
  .module('acrosticApp')
  .component('acrosticFactory', {
    template: '<acrostic word="word" tabindex=0 words="words"></acrostic><button ng-click="$ctrl.download()">Download</button>',
    controller: ['$scope', '$http', function($scope, $http){
      this.download = function(){
        download(
          $('input')
          .toArray()
          .filter(i => $(i).val() ? $(i).val().length > 1 : false)
          .map(i => `${'  '.repeat(parseInt($(i).attr('tabindex')))}${$(i).val()}`)
          .join('\n'),
          $scope.word + '.txt', 
          'text/plain'
        );
      }

      /*
      this.words = [];
      $http.get('/app/words.txt').then(response => {
        this.words = response.data.split('\r\n');
        // $('input').autocomplete({source: this.words, appendTo: 'input:focus'});
      });
      */
    }],
  })
