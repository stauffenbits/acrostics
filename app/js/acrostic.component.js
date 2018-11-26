'use strict';

angular
  .module('acrosticApp')
  .directive('autoComplete', ['$scope', function($scope) {
    return function($scope, iElement, iAttrs) {
      iElement.autocomplete({
        source: function(){
          return $scope.words.filter(word => word.startsWith($scope.word))
        },
        select: function() {
          $timeout(function() {
            iElement.trigger('input');
          }, 0);
        }
      });
    };
  }])
  .component('acrostic', {
    templateUrl: 'app/t/acrostic.t.html',
    controller: ['$scope', function AcrosticCtrl($scope){
      $scope.words = [];
      $scope.output = '';

      this.words = $scope.words;

      $scope.$watch('words', (newVal, oldVal, $scope) => {
        $scope.output = $scope.word + '\n\n' + $scope.words.join('\n');
      }, true);

      $scope.empty = function(){
        return $scope.words.join('') == $scope.word;
      };

      this.download = function(){
        alert($('acrostic').get());
        // download(this.output, $scope.word+'.txt', 'text')
      }

    }],
    bindings: {
      word: '=',
      tabindex: '<?',
      words: '<?'
    }
  });
