'use strict';

import $ from 'jquery';
import ko from 'knockout';

// Slide down animation
ko.bindingHandlers.slideVisible = {
    init: function(element, valueAccessor) {
        var value = valueAccessor();
        $(element).toggle(ko.unwrap(value));
    },

    update: function(element, valueAccessor) {          
        var value = valueAccessor();
        
        if (ko.unwrap(value)) {
            $(element).slideDown(250);
        }

        else {
            $(element).slideUp(250);
        }
    } 
};