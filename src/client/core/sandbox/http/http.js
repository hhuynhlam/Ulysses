'use strict';

define(function (require) {
    var $ = require('jquery');

    var http = {
        
        get: function (url, data) { 
            return new Promise($.get(url, data)); 
        },

        post: function (url, data) { 
            return new Promise($.post(url, data)); 
        },

        put: function (url, data) {
            return new Promise($.ajax({
                type: 'PUT',
                url: url,
                data: data
            }));
        },

        'delete': function (url) {
            return new Promise($.ajax({
                type: 'DELETE',
                url: url
            }));
        }
    };

    return http;
});