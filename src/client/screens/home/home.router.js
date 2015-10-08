'use strict';

import $ from 'jquery';
import ko from 'knockout';
import sandbox from 'sandbox';

import ViewModel from './home.viewmodel';

var router = function (app) {

    var render = function (context, callback, id) {
        System.import('screens/home/home.html!text').then(function (template) {
            var viewModel = new ViewModel();
            context.swap(sandbox.util.template(template));
            ko.applyBindings(viewModel, document.getElementById('Home'));
            viewModel.init();

            if (callback) { callback(id); }
        });
    };

    var scrollTo = function (id) {
        var $anchor = $(id);
        $(document.body).animate({ 
            scrollTop: $anchor.offset().top 
        }, 800);
    };

    // root
    app.get('/#/', function (context) {
        render(context);
    });

    app.get('/#/:anchor', function (context) {
        if(!document.getElementById('Home')) {
            render(context, scrollTo, this.params.anchor);
        } else {
            scrollTo(this.params.anchor);
        }
    });

};

export default router;
