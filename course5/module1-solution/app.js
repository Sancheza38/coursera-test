(function () {
	"use strict";

	angular.module("LunchChecker", [])

	.controller('LunchCheckerController', function ($scope) {
		$scope.message = "";
		$scope.dishes = "";
		$scope.checkIfTooMuch = function () {
			if ($scope.dishes == "") {
				$scope.message = "Please enter data first";
			} else {
				var items = ItemsInList($scope.dishes);
				if (items == 0 || $scope.dishes == "") {
				} else if (items <= 3) {
					$scope.message = "Enjoy!";
				} else {
					$scope.message = "Too much!";
				}
			}
		};

		function itemsInList(string){
			var array = string.split(",");
			console.log(array);
			return array.length;
		}
	});
})();