describe('GroceriesController spec', function () {

    var $rootScope, mockService, deferred, ctrl;
    beforeEach(module('app'));

    beforeEach(module(function ($provide) {
        mockService = jasmine.createSpyObj('DS', ['getGroceries']);
        $provide.value('DataService', mockService);
    }));

    beforeEach(inject(function ($controller, _$rootScope_, $q) {
        $rootScope = _$rootScope_;

        //create promise
        deferred = $q.defer();

        //mock service response (foc controller's constructor)
        mockService.getGroceries.and.returnValue(deferred.promise);

        //create controller
        ctrl = $controller('GroceriesController');
    }));

    it('groceries should be null', function () {
        expect(ctrl.groceries).toBeNull();
    });

    it('groceries should change after promise resolved', function () {

        deferred.resolve({data: [{name: 'meet'}, {name: 'wine'}]});

        //not yet...
        expect(ctrl.groceries).toBeNull();

        $rootScope.$apply();

        //now!
        expect(ctrl.groceries.length).toBe(2);

    });

    it('quantity should change after events', function () {

        expect(ctrl.quantity).toBe(0);

        $rootScope.$broadcast('more.food');

        expect(ctrl.quantity).toBe(1);
    });

});