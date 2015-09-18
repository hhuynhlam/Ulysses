'use strict';

define(function (require) {
    var ko = require('knockout');

    var InputViewModel = function () {
        this.isVisible = ko.observable(true);
        this.value = ko.observable('Placeholder');
    };

    return InputViewModel;
});