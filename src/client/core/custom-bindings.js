'use strict';

import $ from 'jquery';
import ko from 'knockout';

// Fade animation
ko.bindingHandlers.fadeVisible = {
    init: function(element, valueAccessor) {
        var value = valueAccessor();
        $(element).toggle(ko.unwrap(value));
    },

    update: function(element, valueAccessor) {          
        var value = valueAccessor();
        
        if (ko.unwrap(value)) {
            $(element).fadeIn(500);
        }

        else {
            $(element).fadeOut(500);
        }
    } 
};

// Slide animation
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