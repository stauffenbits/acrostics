'use strict';

angular
  .module('acrosticApp')
  .component('acrostic', {
    templateUrl: 'app/t/acrostic.t.html',
    controller: ['$scope', function AcrosticCtrl($scope){
      $scope.word = '';
      $scope.words = [];
      $scope.output = 'test';

      $scope.$watch('words', (newVal, oldVal, $scope) => {
        $scope.output = $scope.word + '\n\n' + $scope.words.join('\n');
      }, true);

      $scope.download = function(){
        download($scope.output, $scope.word, 'text');
      }

    }]
  });
