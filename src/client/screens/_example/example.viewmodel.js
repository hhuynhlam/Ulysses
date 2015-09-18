'use strict';

define(function (require) {
    var ko = require('knockout');

    var ExampleViewModel = function () {
        this.observableA = ko.observable(true);
    };

    return ExampleViewModel;
});