(function () {
    "use strict";

    angular.module('public')
    .controller('signUpController', signUpCtrl);
    
    signUpController.$inject = ['MenuService'];
    function NewsLetterController(MenuService) {
      var $ctrl = this;
      $ctrl.errorMsg = '';
      $ctrl.successMsg = '';
      $ctrl.test = "asdsfsdfdsfsdf";
      $ctrl.submit = function () {
        $ctrl.completed = true;
        var promise = MenuService.getMenuItem($ctrl.menu.short_name);
    
      };
    }
    
    
    })();