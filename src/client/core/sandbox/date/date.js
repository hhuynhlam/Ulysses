'use strict';

define(function (require) {
    var moment = require('moment');

    var date = {
        getDate: function (date) { return moment(date); },
        
        parseUnix: moment.unix,
        toUnix: function (date) { return (date) ? moment(new Date(date)).unix() : moment(Date.now()).unix(); },

        addMinutes: function (date, minutes) { return moment.unix(date).add(minutes, 'minute').unix(); },
        subHours: function (date, hours) { return moment.unix(date).subtract(hours, 'hour').unix(); }
    };

    return date;
});