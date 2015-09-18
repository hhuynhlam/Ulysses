'use strict';

define(function (require) {
    var q = require('Q');

    var promise = {
        defer: q.defer(),
        all: q.all
    };

    return promise;
});