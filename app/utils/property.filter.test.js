describe('property filter spec', function () {
    var filter;

    beforeEach(module('utils'));

    beforeEach(inject(function ($filter) {
        filter = $filter('property');
    }));

    it('should filter by key', function () {
        var data = [
            {a: 1, b: true},
            {a: 2, b: true},
            {a: 3, b: false}
        ];
        expect(filter(data, 'b').length).toBe(2);
    });

});