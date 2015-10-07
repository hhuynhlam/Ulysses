'use strict';

import dropdownWidget from 'dropdown.widget';
import _mock from './styleguide.kendo-mock.json!json';

class StyleGuideViewModel {
    constructor() {}

    init() {
        this._kendoDropDown();
    }

    _kendoDropDown() {
        dropdownWidget.create({
            id: 'KendoDropDownList',
            dataTextField: 'name',
            dataValueField: 'id',
            dataSource: _mock
        });
    }
}

export default StyleGuideViewModel;