'use strict';

define(function (require) {
    var cookie = require('cookie');

    var storage = {

        cookie: {
            read: function (name) { return cookie.get(name); },
            remove: function (name) { cookie.remove(name, { path: window.env.ROOT_DIR }); },
            set: function (name, val, options) { 
                var _expires;
                
                if (!options) { options = {}; }

                if (options.expires) {
                    _expires = new Date();
                    _expires.setHours(_expires.getHours() + options.expires);
                } 

                cookie.set(name, val, { 
                    expires: _expires,
                    path: options.path,
                    domain: options.domain,
                    secure: options.secure 
                }); 
            }
        },

        local: {
            read: function (name) { return window.localStorage.getItem(name); },
            remove: function (name) { window.localStorage.removeItem(name); },
            set: function (name, val) { window.localStorage.setItem(name, val); }
        },

        session: {
            read: function (name) { return window.sessionStorage.getItem(name); },
            remove: function (name) { window.sessionStorage.removeItem(name); },
            set: function (name, val) { window.sessionStorage.setItem(name, val); }
        }
        
    };

    return storage;
});