(function () {
'use strict';

angular.module('public')
.controller('myInfoController', myInfoController);

myInfoController.$inject = ['favMenuItem'];

function myInfoController(favMenuItem) {
    var $ctrl = this;

    this.favMenuItem = favMenuItem;

    console.log(favMenuItem);
};
})();