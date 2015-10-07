'use strict';


import ko from 'knockout';
import 'knockout-postbox';

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

export default msg;
