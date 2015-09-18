'use strict';

define(function (require) {
    var ko = require('knockout');
    var sandbox = require('sandbox');
    var ExampleViewModel = require('example.viewmodel');

    var router = function (app) {   
        
        app.get('/#/', function (context) {
            require(['text!screens/_example/example.html'], function (template) {
                var exampleViewModel = new ExampleViewModel();

                // render partial view
                context.swap(sandbox.util.template(template));
                
                // apply ko bindings
                ko.applyBindings(exampleViewModel, document.getElementById('Example'));

                // initialize view model
                exampleViewModel.init();
            });
        });

    };

    return router;

});