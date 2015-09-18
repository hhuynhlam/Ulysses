'use strict';

define(function (require) {
    var $ = require('jquery');
    var q = require('Q');

    var http = {
        
        get: function (url, data) { 
            return q($.get(url, data)); 
        },

        post: function (url, data) { 
            return q($.post(url, data)); 
        },

        put: function (url, data) {
            return q($.ajax({
                type: 'PUT',
                url: url,
                data: data
            }));
        },

        'delete': function (url) {
            return q($.ajax({
                type: 'DELETE',
                url: url
            }));
        }
    };

    return http;
});