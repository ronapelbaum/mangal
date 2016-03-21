describe("PeopleController spec", function () {

    var ctrl;

    beforeEach(module('app'));
    beforeEach(inject(function ($controller) {
        ctrl = $controller('PeopleController');
    }));

    it('people array should init with []', function () {
        expect(ctrl.people).toEqual([]);
    });

    describe('addPerson() spec', function () {
        var $rootScope, person = {name: 'bob'};
        beforeEach(inject(function (_$rootScope_) {
            $rootScope = _$rootScope_;
            spyOn($rootScope, '$broadcast');
            ctrl.person = person;
            ctrl.addPerson();


        }));

        it('people array should change after adding a person', function () {
            expect(ctrl.people.length).toBe(1);
            expect(ctrl.people).toContain(person);
        });

        it('should reset temp person after adding', function () {
            expect(ctrl.person).toEqual({});
        });

        it('should broadcast event after adding', function () {
            expect($rootScope.$broadcast).toHaveBeenCalledWith('more.food');
        });
    });

});