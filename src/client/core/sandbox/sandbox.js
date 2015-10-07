'use strict';

define(function (require) {
    var http = require('core/sandbox/http/http');
    var msg = require('core/sandbox/msg/msg');
    var util = require('core/sandbox/util/util');

    return {
        http: http,
        msg: msg,
        util: util
    };
    
});