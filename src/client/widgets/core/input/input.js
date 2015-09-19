'use strict';

define(function (require) {
    var $ = require('jquery');
    var ko = require('knockout');
    var sandbox = require('sandbox');

    var InputTemplate = require('text!widgets/core/input/input.html');
    var InputViewModel = require('input.viewmodel');

    var inputViewModel = {
        
        create: function (options) {
            var selector = '#' + options.id;
            $(selector).html( sandbox.util.template(InputTemplate) );
            ko.applyBindings(new InputViewModel(options), $(selector)[0]);
        }
    
    };

    return inputViewModel;
});