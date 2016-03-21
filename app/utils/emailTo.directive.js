(function (angular) {
    'use strict';

    function emailToDirective() {
        return {
            restrict: 'A',
            template: "<a ng-href='mailTo:{{emailTo}}'>{{emailTo}}</a>",
            scope: {
                emailTo: '='
            }
        };
    }
    angular.module('utils').directive('emailTo', [emailToDirective]);
})(angular);
