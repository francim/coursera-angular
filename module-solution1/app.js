(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.itemsAteForLunch = "";

  $scope.checkFoods = function () {
    $scope.messageHealth = "";
    $scope.type = "info";
    if ( $scope.itemsAteForLunch.length == 0 ) {
      $scope.type = "error";
      $scope.messageHealth = "Please enter data first";
    } else {
      var foodsCounter = countFoods($scope.itemsAteForLunch);
      if ( foodsCounter <= 3 ) {
        $scope.messageHealth = "Enjoy!";
      } else {
        $scope.messageHealth = "Too much!";
      }
    }
  }

  // count number of foods in list
  // do NOT consider and empty item
  function countFoods(foods) {
    var list = foods.split(",");
    var count = 0;
    for ( var index in list)  {
      if ( list[index].trim().length > 0 ) {
        count++;
      }
    }
    return count;
  }

}

})();
