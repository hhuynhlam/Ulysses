'use strict';

import ko from 'knockout';
import DropDownViewModel from './dropdown.viewmodel';

describe('DropDownViewModel', function() {
    
    it('can be instantiated', function () {
        var dropDownViewModel = new DropDownViewModel();
        expect(typeof dropDownViewModel).toBe('object');
        expect(typeof dropDownViewModel.init).toBe('function');
    });
    
});
