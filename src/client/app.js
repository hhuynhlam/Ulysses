'use strict';

import * as ko from 'knockout';
import 'bootstrap';
import * as sammy from 'sammy';
import * as sandbox from 'sandbox';

var AppViewModel = function () {
    this.isReady = ko.observable(false);
};

// define a new Sammy.Application bound to the #MainView DOM
// var app = sammy('#MainView');

// routes
// require('dev.router')(app);

// // 404 Error
// app.notFound = function () {
//     window.location.replace('/#/');
// };

// // override this function so that Sammy doesn't mess with forms
// app._checkFormSubmission = function() { return false; };

// // Override swap function for post-actions and transitions
// app.swap = function(content, callback) {
    
//     // reset all pub/sub
//     sandbox.msg.reset();

//     // replace html
//     app.$element().html(content);

//     // apply callback
//     if (callback) { callback.apply(); }
// };

// run app
$(function() { 
    ko.applyBindings(new AppViewModel(), document.getElementById('MainView'));
    // app.run(); 
});
