'use strict';

import LoginViewModel from './login.viewmodel';

describe('LoginViewModel', function() {
    it('can be instantiated', function () {
        var viewModel = new LoginViewModel();
        expect(typeof viewModel).toBe('object');
    });
});
