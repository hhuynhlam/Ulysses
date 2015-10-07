'use strict';

define(function (require) {
    var dropdownWidget = require('dropdown.widget');
    var _mock = require('json!screens/_dev/_styleguide/styleguide.kendo-mock.json');

    var StyleGuideViewModel = function () {
        
    };

    StyleGuideViewModel.prototype.init = function init () {
        this.kendoDropDown();
    };

    StyleGuideViewModel.prototype.kendoDropDown = function kendoDropDown() {
        dropdownWidget.create({
            id: 'KendoDropDownList ',
            dataTextField: 'name',
            dataValueField: 'id',
            dataSource: _mock
        });
    };

    return StyleGuideViewModel;
});