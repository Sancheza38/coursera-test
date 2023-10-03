(function () {
'use strict';

angular.model("ShoppingListCheckOff", [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var BuyItem = this;

	BuyItem.items = ShoppingListCheckOffService.getToBuyItems();


	var toBuyArray = ShoppingListCheckOffService.ToBuyItems();
	BuyItem.items = ShoppingListCheckOffService.getItems();

	BuyItem.removeItem = function () {
		ShoppingListCheckOffService.removeItem()
	}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var BoughtItem = this;

	var boughtArray = ShoppingListCheckOffService.BoughtItems();

	BoughtItem.items = ShoppingListCheckOffService.getItems();

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
					   "name": "pizza"}
					  {"quantity": 4,
					   "name": "cake"}];

	//List of BoughtItems
	var BoughtItems = [];


	service.removeItem = function (itemName) {
		BoughtItems.push(itemName);

	};

	service.getToBuyItems = function () {
		return ToBuyItems;
	};
};
})();