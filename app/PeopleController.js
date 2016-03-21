(function (angular) {
    'use strict';

    function PeopleController($rootScope) {

        var self = this;
        self.person = {};
        self.people = [];

        self.addPerson = function () {
            self.people.push(self.person);
            self.person = {};
            $rootScope.$broadcast('more.food');
        };

    }

    angular.module('app').controller('PeopleController', ['$rootScope', PeopleController]);
})(angular);
