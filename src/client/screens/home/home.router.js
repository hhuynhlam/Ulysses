'use strict';

import ko from 'knockout';
import sandbox from 'sandbox';

import ViewModel from './home.viewmodel';

var router = function (app) {

    // root
    app.get('/#/', function (context) {
        System.import('screens/home/home.html!text').then(function (template) {
            var viewModel = new ViewModel();
            context.swap(sandbox.util.template(template));
            ko.applyBindings(viewModel, document.getElementById('Home'));
            viewModel.init();
        });
    });

};

export default router;
