'use strict';

import $  from 'jquery';
import DropDownViewModel from './dropdown.viewmodel';

var dropDownViewModel = {
    
    create: function (options) {
        var $selector = $('#' + options.id),
            _viewModel = new DropDownViewModel(options);

        $selector.addClass('uly-core-dropdown');
        _viewModel.init();
    }

};

export default dropDownViewModel;
