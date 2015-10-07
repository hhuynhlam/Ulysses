'use strict';

import ko from 'knockout';
import sandbox from 'sandbox';

import ExampleViewModel from './_example/example.viewmodel';
import StyleGuideViewModel from './_styleguide/styleguide.viewmodel';

var router = function (app) {

    // root
    app.get('/#/dev', function (context) {
        System.import('screens/_dev/_example/example.html!text').then(function (template) {
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
        System.import('screens/_dev/_styleguide/styleguide.bootstrap.html!text').then(function (template) {
            var styleGuideViewModel = new StyleGuideViewModel();

            // render partial view
            context.swap(sandbox.util.template(template));
            
            // apply ko bindings
            ko.applyBindings(styleGuideViewModel, document.getElementById('StyleGuideBootstrap'));

            // initialize view model
            styleGuideViewModel.init();
        });
    });

    // style guide
    app.get('/#/dev/styleguide/kendo', function (context) {
        System.import('screens/_dev/_styleguide/styleguide.kendo.html!text').then(function (template) {
            var styleGuideViewModel = new StyleGuideViewModel();

            // render partial view
            context.swap(sandbox.util.template(template));
            
            // apply ko bindings
            ko.applyBindings(styleGuideViewModel, document.getElementById('StyleGuideKendo'));

            // initialize view model
            styleGuideViewModel.init();
        });
    });

};

export default router;
