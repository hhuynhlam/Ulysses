'use strict';

define(function (require) {
    var inputWidget = require('input.widget');

    var ExampleViewModel = function () {
        
    };

    ExampleViewModel.prototype.init = function init () {
        inputWidget.create('#SampleInput');
    };

    return ExampleViewModel;
});