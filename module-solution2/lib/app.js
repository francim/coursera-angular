(function () {
'use strict';

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.inject = ["$scope","ShoppingListCheckOffService"];
function ToBuyController($scope,ShoppingListCheckOffService) {
  $scope.items = ShoppingListCheckOffService.getItemsToBuy();

  $scope.buy = function(index) {
    return ShoppingListCheckOffService.buy(index);
  }
}

AlreadyBoughtController.inject = ["$scope","ShoppingListCheckOffService"];
function AlreadyBoughtController($scope,ShoppingListCheckOffService) {
  $scope.items = ShoppingListCheckOffService.getItemsBought();

  $scope.removeBought = function(index) {
    return ShoppingListCheckOffService.removeBought(index);
  }

}

function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [];

  itemsToBuy.push({
    item_name: "cookies",
    item_quantity: "10"});
  itemsToBuy.push({
    item_name: "chips",
    item_quantity: "20"});

  var itemsBought = [];

  service.buy = function(index) {
    // check uniqueness
    itemsBought.push(itemsToBuy[index]);
    itemsToBuy.splice(index,1);
  }

  service.removeBought = function(index) {
    itemsToBuy.push(itemsBought[index]);
    itemsBought.splice(index,1);
  }

  service.getItemsToBuy = function() {
    return itemsToBuy;
  }

  service.getItemsBought = function() {
    return itemsBought;
  }


}

})();
