'use strict';

import ko from 'knockout';
import sammy from 'sammy';
import sandbox from 'sandbox';
import 'bootstrap';

class AppViewModel {
    constructor() {
        this.isReady = ko.observable(false);
        
        this.init();
    }

    init() {
        var bgImg, aboutImg, bannerImg;

        bgImg = new Image();
        bgImg.src = '/public/images/intro-bg.jpg';

        aboutImg = new Image();
        aboutImg.src = '/public/images/about.jpg';

        bannerImg = new Image();
        bannerImg.src = '/public/images/banner-bg.jpg';

        // Set app to ready
        $(bgImg, aboutImg, bannerImg).load( () =>  {
            this.isReady(true);
        });
    }
}

// define a new Sammy.Application bound to the #MainView DOM
var app = sammy('#MainView');

// routes
import homeRouter from 'home.router'; homeRouter(app);

// // 404 Error
app.notFound = function () {
    window.location.replace('/#/');
};

// override this function so that Sammy doesn't mess with forms
app._checkFormSubmission = function() { return false; };

// Override swap function for post-actions and transitions
app.swap = function(content, callback) {
    
    // reset all pub/sub
    sandbox.msg.reset();

    // replace html
    app.$element().html(content);

    // apply callback
    if (callback) { callback.apply(); }
};

// run app
$(function() { 
    ko.applyBindings(new AppViewModel(), document.body);
    app.run(); 
});



