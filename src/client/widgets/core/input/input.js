'use strict';

define(function (require) {
    var $ = require('jquery');
    var ko = require('knockout');
    var sandbox = require('sandbox');

    var InputTemplate = require('text!widgets/core/input/input.html');
    var InputViewModel = require('input.viewmodel');

    var inputViewModel = {
        
        create: function (selector) {
            $(selector).html( sandbox.util.template(InputTemplate) );
            ko.applyBindings(new InputViewModel(), $(selector)[0]);
        }
    
    };

    return inputViewModel;
});