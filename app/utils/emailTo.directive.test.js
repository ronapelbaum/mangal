describe('emailTo directive spec', function () {

    var element;
    beforeEach(module('utils'));

    beforeEach(inject(function ($compile, $rootScope) {
        //create scope
        var scope = $rootScope.$new();
        //create element
        element = angular.element('<span email-to="email"></span>');
        // Compile the element with the scope
        $compile(element)(scope);

        // Invoke the $digest - Trigger watchers
        scope.email = 'my@test.com';
        scope.$digest();
    }));

    it('element should have "a" tag with valid href with "mailto"', function () {
        expect(element.find('a').attr('href')).toEqual('mailTo:my@test.com');
    });

    it('element should have "a" tag with the email as html', function () {
        expect(element.find('a').html()).toEqual('my@test.com');
    });

});