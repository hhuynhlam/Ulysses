'use strict';

import ko from 'knockout';
import BaseWidgetViewModel from 'base-widget.viewmodel';

class NavbarViewModel extends BaseWidgetViewModel {
  constructor(options) {
    super(options);

    this.options = options || {};

    this.loggedIn = ko.observable(false);
    this.currentUser = ko.observable({});
    this.showHelp = ko.observable(false);

    this.logout = function () {};
    this.help = function () {};
  }
  
  init() {

  }
}

export default NavbarViewModel;
