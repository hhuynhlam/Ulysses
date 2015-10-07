'use strict';

import * as ko from 'knockout';
import * as postbox from 'knockout-postbox';
ko.postbox = postbox;


export var subscribe = ko.postbox.subscribe;
export var publish = ko.postbox.publish;
export var reset = ko.postbox.reset;

export var dispose = function () {
    var subs = Array.prototype.slice.call(arguments);
    subs.forEach(function (sub) {
        sub.dispose();
    });
};