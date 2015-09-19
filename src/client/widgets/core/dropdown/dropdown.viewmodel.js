'use strict';

define(function (require) {
    var $ = require('jquery');
    var ko = require('knockout');
    var sandbox = require('sandbox');

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
        if (this.options.remote && !this.options.dataSource) {
            this.options.dataSource = {
                transport: {
                    read: {
                        dataType: 'json',
                        url: this.options.remote,
                    }
                }
            };
        }

        this.setupPublications();
    };

    DropDownViewModel.prototype.setupPublications = function setupPublications() {
        var _this = this,
            _onChange, _topics;

        if ( _this.options.cascade && sandbox.util.isArray(_this.options.cascade) )  {
            _topics = _this.options.cascade;

            _onChange = function () {
                var val = this.value();   
                _topics.forEach(function (topic) {
                    sandbox.msg.publish(topic, val);
                });
            };

            _this.options.cascade = _onChange;
        }
    };

    return DropDownViewModel;
});