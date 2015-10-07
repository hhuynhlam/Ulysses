'use strict';

define(function (require) {
    var md5 = require('md5');

    var crypto = {
        encrypt: md5
    };

    return crypto;
});