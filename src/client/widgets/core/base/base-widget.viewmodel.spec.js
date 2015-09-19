'use strict';

define(function (require) {
    var BaseWidgetViewModel = require('base-widget.viewmodel');

    describe('BaseWidgetViewModel', function() {
        
        it('can be instantiated', function () {
            var baseWidgetViewModel = new BaseWidgetViewModel();
            expect(typeof baseWidgetViewModel).toBe('object');
        });
        
    });
});