'use strict';

define(function (require) {
    var ko = require('knockout');
    var sandbox = require('sandbox');

    class InputViewModel {
        constructor(options) {
            this.options = options || {};
            
            this.isVisible = ko.observable(true);
            this.value = ko.observable('Placeholder');
        }

        init() {
            this.setupPublications();
            this.setupSubscriptions();
        }

        setupPublications() {
            if (this.options.publish)  {
                
                this.value.subscribe(val => {
                    
                    if (typeof this.options.publish === 'function') {
                        this.options.publish(val);
                    } else {
                        this.options.publish.forEach(function (topic) {
                            sandbox.msg.publish(topic, val);
                        }, this);
                    }

                });
            
            }
        }

        setupSubscriptions() {
            if (this.options.subscribe)  {
                
                this.options.subscribe.forEach(topic => {
                    
                    sandbox.msg.subscribe(topic, function (val) {
                        this.value(val);
                    }, this, true);
                
                });
            
            }
        }
    }


    return InputViewModel;
});