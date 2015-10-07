'use strict';

import HomeViewModel from './home.viewmodel';

describe('HomeViewModel', function() {
    it('can be instantiated', function () {
        var homeViewModel = new HomeViewModel();
        expect(typeof homeViewModel).toBe('object');
    });
});
