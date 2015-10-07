'use strict';

import ko from 'knockout';
import BaseWidgetViewModel from 'base-widget.viewmodel';
import 'k/kendo.dropdownlist.min';

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

export default DropDownViewModel;
