'use strict';

define(function (require) {
    var ko = require('knockout');
    var sandbox = require('sandbox');
    
    var ExampleViewModel = require('example.viewmodel');
    var StyleGuideViewModel = require('styleguide.viewmodel');

    var router = function (app) {   
        
        // root
        app.get('/#/dev', function (context) {
            require(['text!screens/_dev/_example/example.html'], function (template) {
                var exampleViewModel = new ExampleViewModel();

                // render partial view
                context.swap(sandbox.util.template(template));
                
                // apply ko bindings
                ko.applyBindings(exampleViewModel, document.getElementById('Example'));

                // initialize view model
                exampleViewModel.init();
            });
        });

        // style guide
        app.get('/#/dev/styleguide', function (context) {
            require(['text!screens/_dev/_styleguide/styleguide.html'], function (template) {
                var styleGuideViewModel = new StyleGuideViewModel();

                // render partial view
                context.swap(sandbox.util.template(template));
                
                // apply ko bindings
                ko.applyBindings(styleGuideViewModel, document.getElementById('StyleGuide'));

                // initialize view model
                styleGuideViewModel.init();
            });
        });

    };

    return router;

});