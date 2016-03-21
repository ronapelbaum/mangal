(function (angular) {
    'use strict';

    function GroceriesController($rootScope, DataService) {
        var self = this;
        self.filter = 'kosher';
        self.quantity = 0;
        self.groceries = null;

        DataService.getGroceries().then(function (result) {
            self.groceries = result.data;
        });

        $rootScope.$on('more.food', function(){
            self.quantity++;
        });
    }

    angular.module('app').controller('GroceriesController', ['$rootScope', 'DataService', GroceriesController]);
})(angular);
