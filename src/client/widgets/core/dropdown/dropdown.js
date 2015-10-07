'use strict';

define(function (require) {
    var $ = require('jquery');

    var DropDownViewModel = require('dropdown.viewmodel');

    var dropDownViewModel = {
        
        create: function (options) {
            var $selector = $('#' + options.id),
                _viewModel = new DropDownViewModel(options);

            $selector.addClass('uly-core-dropdown');
            _viewModel.init();
        }
    
    };

    return dropDownViewModel;
});