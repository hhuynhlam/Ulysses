'use strict';

define(function (require) {
    var ko = require('knockout');
    var DropDownViewModel = require('dropdown.viewmodel');

    describe('DropDownViewModel', function() {
        
        it('can be instantiated', function () {
            var dropDownViewModel = new DropDownViewModel();
            expect(typeof dropDownViewModel).toBe('object');
            expect(typeof dropDownViewModel.init).toBe('function');
        });

        describe('/ after instantiated', function () {
            var dropDownViewModel;

            beforeEach(function () {
                dropDownViewModel = new DropDownViewModel();
            });
        });
        
    });
});