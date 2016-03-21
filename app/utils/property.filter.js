(function (angular) {

    function KeyFilter(data, key) {
        if (!data || !key)return data;

        return data.filter(function (d) {
            return d[key];
        });
    }

    angular.module('utils').filter('property', function () {
        return KeyFilter;
    });
})(angular);
