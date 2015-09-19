'use strict';

define(function (require) {
    var $ = require('jquery');
    var ko = require('knockout');

    var sandbox = require('sandbox');
    var msg = sandbox.msg;
    var _ = sandbox.util;

    require('k/kendo.dropdownlist.min');

    var DropDownViewModel = function (options) {
        this.options = options || {};
        this.$selector = $('#' + options.id);
        
        this.value = ko.observable();
    };

    DropDownViewModel.prototype.init = function init() {
        this.setOptions();
        this.$selector.kendoDropDownList(this.options);
    };

    DropDownViewModel.prototype.setOptions = function setOptions() {
        this.setupPublications();
        this.setupSubscriptions();
    };

    DropDownViewModel.prototype.setupPublications = function setupPublications() {
        var _this = this,
            _supportedEvents = ['change', 'close', 'dataBound', 'filtering', 'open', 'select', 'cascade'];

        _.forOwn(_this.options, function (val, key) {
            var _on, _topics;

            if ( _.includes(_supportedEvents, key) && _.isArray(val) ) {
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
    };

    DropDownViewModel.prototype.setupSubscriptions = function setupSubscriptions() {
        var _this = this,
            _dataBoundOption, _onDataBound;

        _this.subscriptions = [];

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

            // extend exisiting dataBound event
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
    };

    return DropDownViewModel;
});