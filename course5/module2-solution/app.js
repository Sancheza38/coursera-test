(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var BuyItem = this;

	BuyItem.items = ShoppingListCheckOffService.getToBuyItems();
	
	BuyItem.removeItem = function (index) {
		ShoppingListCheckOffService.removeItem(index);

	}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var BoughtItem = this;

	BoughtItem.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
	var service = this;

	//List of ToBuyItems
	var ToBuyItems = [{"quantity": 10,
					   "name": "cookie"},
					  {"quantity": 5,
					   "name": "pumpkin"},
					  {"quantity": 6,
					   "name": "muffin"},
					  {"quantity": 10,
					   "name": "pizza"},
					  {"quantity": 4,
					   "name": "cake"}];

	//List of BoughtItems
	var BoughtItems = [];

	service.removeItem = function (index) {
		BoughtItems.push(ToBuyItems[index]);
		ToBuyItems.splice(index, 1);
	};

	service.getToBuyItems = function () {
		return ToBuyItems;
	};

	service.getBoughtItems = function () {
		return BoughtItems;
	}

}

})();