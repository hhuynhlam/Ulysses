'use strict';

define(function (require) {
    var ExampleViewModel = require('example.viewmodel');

    describe('ExampleViewModel', function() {
        it('can be instantiated', function () {
            var exampleViewModel = new ExampleViewModel();
            expect(typeof exampleViewModel).toBe('object');
        });
    });
});