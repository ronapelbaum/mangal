describe('DataService spec', function () {
    //Service under test
    var DataService;

    //depend on module
    beforeEach(module('app'));

    //inject DataService (use angular's DI)
    beforeEach(inject(function (_DataService_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        DataService = _DataService_;
    }));

    describe('getGroceries() spec', function () {
        it('should call $http.get()', inject(function ($http) {
            spyOn($http, 'get').and.callThrough();
            DataService.getGroceries();
            expect($http.get).toHaveBeenCalledWith('./data/groceries.json');
        }));

        it('should return a promise', function () {
            var actual = DataService.getGroceries();
            expect(typeof actual.then).toEqual('function');
        });

        it('resolved response should contain proper "unit" attr', inject(function ($httpBackend) {
            //mock $httpBackend
            $httpBackend.whenGET().respond(function (method, url, data, headers) {
                return [200, [{amount: 2}, {amount: 2.5}]];
            });

            var actual = DataService.getGroceries();
            actual.then(function (result) {
                expect(result.data).toBeDefined();
                expect(result.data.length).toBe(2);
                expect(result.data[0]['unit']).toEqual('units');
                expect(result.data[1]['unit']).toEqual('kg');
            });
            $httpBackend.flush();


        }));
    });


});