'use strict';

define(function (require) {
    var ko = require('knockout');
    var BaseWidgetViewModel = require('base-widget.viewmodel');

    describe('BaseWidgetViewModel', function() {
        
        it('can be instantiated', function () {
            var baseWidgetViewModel = new BaseWidgetViewModel();
            expect(typeof baseWidgetViewModel).toBe('object');
            expect(typeof baseWidgetViewModel.init).toBe('function');
        });

        describe('/ after instantiated', function () {
            var baseWidgetViewModel;

            beforeEach(function () {
                baseWidgetViewModel = new BaseWidgetViewModel();
            });
        });
        
    });
});