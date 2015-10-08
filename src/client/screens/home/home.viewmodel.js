'use strict';

import ko from 'knockout';
import 'custom-bindings';

class HomeViewModel {

    constructor() {
        this.showContact = ko.observable(false);
    }

    init() {}

    toggleContact() { this.showContact( !this.showContact() ); }

}

export default HomeViewModel;