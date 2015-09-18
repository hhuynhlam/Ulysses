'use strict';

define(function (require) {
    var ko = require('knockout');
    var sandbox = require('sandbox');
    var ExampleViewModel = require('example.viewmodel');

    var router = function (app) {   
        
        app.get('/#/', function (context) {
            require(['text!screens/_example/example.html'], function (template) {
                context.swap(sandbox.util.template(template));

                // apply ko bindings
                ko.applyBindings(new ExampleViewModel(), document.getElementById('Example'));
            });
        });

    };

    return router;

});