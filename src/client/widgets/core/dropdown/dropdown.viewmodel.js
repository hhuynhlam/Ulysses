'use strict';

define(function (require) {
    var ko = require('knockout');
    var BaseWidgetViewModel = require('base-widget.viewmodel');
    require('k/kendo.dropdownlist.min');

    var DropDownViewModel = function (options) {
        this.options = options || {};
        BaseWidgetViewModel.call(this, options);
        
        this.value = ko.observable();
    };

    DropDownViewModel.prototype = Object.create(BaseWidgetViewModel.prototype);
    DropDownViewModel.prototype.constructor = DropDownViewModel;

    DropDownViewModel.prototype.init = function init() {
        this.setOptions();
        this.$selector.kendoDropDownList(this.options);
    };

    DropDownViewModel.prototype.setOptions = function setOptions() {
        var _supportedEvents = ['change', 'close', 'dataBound', 'filtering', 'open', 'select', 'cascade'];
        this.setupPublications(_supportedEvents);
        this.setupSubscriptions();
    };

    return DropDownViewModel;
});