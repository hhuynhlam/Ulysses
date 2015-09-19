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

        this.init();
    };

    DropDownViewModel.prototype.init = function init() {
        this.setOptions();
        this.$selector.kendoDropDownList(this.options);
    };

    DropDownViewModel.prototype.setOptions = function setOptions() {
        this.setupPublications();
    };

    DropDownViewModel.prototype.setupPublications = function setupPublications() {
        var _this = this,
            _supportedEvents = ['change', 'close', 'dataBound', 'filtering', 'open', 'select', 'cascade'];

        _.forOwn(_this.options, function (val, key) {
            var _on, _topics;

            if ( _.includes(_supportedEvents, key) && _.isArray(val) ) {
                _topics = val;

                _on = function () {
                    var _val = this.value();   
                    _topics.forEach(function (topic) {
                        msg.publish(topic, _val);
                    });
                };

                _this.options[key] = _on;
            }
        });
    };

    return DropDownViewModel;
});