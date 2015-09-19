'use strict';

define(function (require) {
    var ko = require('knockout');
    var sandbox = require('sandbox');

    var InputViewModel = function (options) {
        this.options = options || {};

        this.isVisible = ko.observable(true);
        this.value = ko.observable('Placeholder');

        this.init();
    };

    InputViewModel.prototype.init = function init() {
        this.setupPublications();
        this.setupSubscriptions();
    };

    InputViewModel.prototype.setupPublications = function setupPublications() {
        if (this.options.publish)  {
            
            // onChange
            this.value.subscribe(function (val) {
                
                if (typeof this.options.publish === 'function') {

                    this.options.publish(val);

                } else {

                    this.options.publish.forEach(function (topic) {
                        sandbox.msg.publish(topic, val);
                    }, this);

                }

            }, this);
        
        }
    };

    InputViewModel.prototype.setupSubscriptions = function setupSubscriptions() {
        if (this.options.subscribe)  {
            
            this.options.subscribe.forEach(function (topic) {
                
                sandbox.msg.subscribe(topic, function (val) {
                    this.value(val);
                }, this, true);
            
            }, this);
        
        }
    };

    return InputViewModel;
});