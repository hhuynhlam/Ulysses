'use strict';

define(function (require) {
    var ko = require('knockout');
    var BaseWidgetViewModel = require('base-widget.viewmodel');
    require('k/kendo.dropdownlist.min');

    class DropDownViewModel extends BaseWidgetViewModel {
      constructor(options) {
        super(options);
        this.options = options || {};
        this.value = ko.observable();
      }
      
      init() {
        this.setOptions();
        this.$selector.kendoDropDownList(this.options);
      }
      
      setOptions() {
        var _supportedEvents = ['change', 'close', 'dataBound', 'filtering', 'open', 'select', 'cascade'];
        this.setupPublications(_supportedEvents);
        this.setupSubscriptions();
      }
    }

    return DropDownViewModel;
});