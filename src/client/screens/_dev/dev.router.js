'use strict';

// import * as ko from 'knockout';
// import * as sandbox from 'sandbox';

// var ExampleViewModel = require('example.viewmodel');
// var StyleGuideViewModel = require('styleguide.viewmodel');

define(function () {
    var router = function (app) {

        // root
        app.get('/#/dev', function (context) {
            // require(['text!screens/_dev/_example/example.html'], function (template) {
            //     var dom = document.getElementById('Example'),
            //         exampleViewModel = new ExampleViewModel();

            //     // render partial view
            //     context.swap(sandbox.util.template(template));
                
            //     // apply ko bindings
            //     ko.applyBindings(exampleViewModel, dom);

            //     // initialize view model
            //     exampleViewModel.init();
            // });
        });

        // // style guide
        // app.get('/#/dev/styleguide', function (context) {
        //     require(['text!screens/_dev/_styleguide/styleguide.bootstrap.html'], function (template) {
        //         var styleGuideViewModel = new StyleGuideViewModel();

        //         // render partial view
        //         context.swap(sandbox.util.template(template));
                
        //         // apply ko bindings
        //         ko.applyBindings(styleGuideViewModel, document.getElementById('StyleGuideBootstrap'));

        //         // initialize view model
        //         styleGuideViewModel.init();
        //     });
        // });

        // // style guide
        // app.get('/#/dev/styleguide/kendo', function (context) {
        //     require(['text!screens/_dev/_styleguide/styleguide.kendo.html'], function (template) {
        //         var styleGuideViewModel = new StyleGuideViewModel();

        //         // render partial view
        //         context.swap(sandbox.util.template(template));
                
        //         // apply ko bindings
        //         ko.applyBindings(styleGuideViewModel, document.getElementById('StyleGuideKendo'));

        //         // initialize view model
        //         styleGuideViewModel.init();
        //     });
        // });

    };

    return router;
});