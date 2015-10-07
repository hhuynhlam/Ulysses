'use strict';

define(function (require) {
    var $ = require('jquery');
    require('k/kendo.notification.min');

    var setupKendoNotification = function (id) {
        var $selector;
        
        // append new notification to body
        $('#AppAlerts').append('<span id="' + id  + '"></span>');
        $selector = $('#' + id);

        return $selector.kendoNotification({
            appendTo: '#AppAlerts'
        }).data('kendoNotification');
    };

    var notification = {
        
        /**
         * @param  {[string]} id  [unique notification identifier, ex. LoginError]
         * @param  {[string]} msg [message to display]
         * @return {[void]}
         */
        info: function (id, msg) {
            var $notification = setupKendoNotification(id);
            $notification.info(msg);
        },

        success: function (id, msg) {
            var $notification = setupKendoNotification(id);
            $notification.success(msg);
        },

        warning: function (id, msg) {
            var $notification = setupKendoNotification(id);
            $notification.warning(msg);
        },

        error: function (id, msg) {
            var $notification = setupKendoNotification(id);
            $notification.error(msg);
        }
    };

    return notification;
});