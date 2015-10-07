'use strict';

import $ from 'jquery';
import sandbox from 'sandbox';

var msg = sandbox.msg;
var _ = sandbox.util;

class BaseWidgetViewModel {
    constructor (options) {
        this.contextId = (options) ? options.id : undefined;
        this.$selector = (options) ? $('#' + options.id) : undefined;

        this.subscriptions = [];
    }

    setupPublications(supportedEvents) {
        var _this = this;
        
        _.forOwn(_this.options, function (val, key) {
            var _on, _topics;

            if ( _.includes(supportedEvents, key) && _.isArray(val) ) {
                _topics = val;

                _on = function (e) {
                    var _val = e.sender.value();   
                    _topics.forEach(function (topic) {
                        msg.publish(topic, _val);
                    });
                };

                _this.options[key] = _on;
            }
        });
    }

    setupSubscriptions() {
        var _this = this,
            _dataBoundOption, _onDataBound;

        if (_this.options.subscribe && _.isArray(_this.options.subscribe)) {
            _onDataBound = function (e) {
                var _topics = _this.options.subscribe, 
                    _subscription;

                // dispose any existing subscriptions
                msg.dispose.apply(_this, _this.subscriptions);
                
                _topics.forEach(function (topic) {

                    // create new subscriptions
                    _subscription = msg.subscribe(topic, function (val) {
                        e.sender.value(val);
                    }, _this, true);

                    // track subscriptions
                    _this.subscriptions.push(_subscription);
                });
            };

            // extend existing dataBound event
            if (typeof _this.options.dataBound === 'function') {
                _dataBoundOption = _this.options.dataBound;
                _this.options.dataBound = function (e) {
                    _dataBoundOption(e);
                    _onDataBound(e);
                };

            // replace dataBound event
            } else {
                _this.options.dataBound = _onDataBound;
            }
            
        }
    }
}

export default BaseWidgetViewModel;
