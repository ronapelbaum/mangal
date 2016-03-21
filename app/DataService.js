(function (angular) {
    'use strict';

    function DataService($http) {

        function getGroceries() {
            return $http.get('./data/groceries.json')
                .then(function (result) {
                    result.data.forEach(function (item) {
                        var unit, amountStr = ('' + item.amount);
                        if (amountStr.indexOf('.') === -1) {
                            unit = 'units';
                        } else {
                            unit = 'kg';
                        }
                        item.unit = unit
                    });
                    return result;
                });
        }

        this.getGroceries = getGroceries;

    }

    angular.module('app').service('DataService', ['$http', DataService]);
})(angular);
