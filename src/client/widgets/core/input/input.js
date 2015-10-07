'use strict';

import $ from 'jquery';
import ko from 'knockout';
import sandbox from 'sandbox';

import InputViewModel from './input.viewmodel';
import InputTemplate from 'widgets/core/input/input.html!text';

var inputViewModel = {
    
    create: function (options) {
        var $selector = $('#' + options.id),
            _viewmodel = new InputViewModel(options);

        $selector.html( sandbox.util.template(InputTemplate) );
        ko.applyBindings(_viewmodel, $selector[0]);
    
        _viewmodel.init();
    }

};

export default inputViewModel;
