'use strict';

import ExampleViewModel from './example.viewmodel';

describe('ExampleViewModel', function() {
    it('can be instantiated', function () {
        var exampleViewModel = new ExampleViewModel();
        expect(typeof exampleViewModel).toBe('object');
    });
});
