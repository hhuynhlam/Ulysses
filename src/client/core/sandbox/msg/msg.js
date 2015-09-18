'use strict';

define(function (require) {
    var ko = require('knockout');
    require('knockout-postbox');

    var msg = {
        subscribe: ko.postbox.subscribe,
        publish: ko.postbox.publish,

        dispose: function () {
            var subs = Array.prototype.slice.call(arguments);
            subs.forEach(function (sub) {
                sub.dispose();
            });
        },

        reset: ko.postbox.reset
    };

    return msg;
});