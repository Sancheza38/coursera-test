(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', ItemListDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.items = [];
    menu.searchTerm = "";

    menu.logMenuItems = function () {
        if(menu.searchTerm != "") {
            // console.log(menu.searchTerm);
            var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

            promise.then(function(response) {
                // console.log(response);
                menu.items = response;

            })
            .catch(function (error) {
                console.log(error);
            });
        } else {
            menu.items = [];
        }
    };

    menu.removeItem = function(index) {
        menu.items.slice(index, 1);
    };

}

function ItemListDirective() {
    var ddo = {
        templateUrl: 'itemsList.html',
        scope: {
            items: '<',
            myTitle: '@title',
            badRemove: '&'
        },
        controller: MenuItemsDirectiveController,
        controllerAs: 'menu',
        bindToController: true
    };

    return ddo;
}

function MenuItemsDirectiveController() {
    var menu = this;
    
    menu.isEmpty = function() {
        return menu.items.length === 0;
    }
}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
        return $http({
            method: "GET",
            url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
        })
        .then(function(result) {
            // process result and only keep items that match
            // console.log(result);
            var items = result.data;
            // console.log(items);
            var foundItems = [];

            for  (const key in items){
                var category = items[key];
                // console.log(category.menu_items);
                category = category.menu_items;
                
                for (var i = 0; i < category.length; i++) {
                    // console.log(category[i]);
                    if (category[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
                    foundItems.push(category[i]);
                    }
                }
            }
            // return processed items
            console.log(foundItems);
            return foundItems;
        });

    };

}

})();