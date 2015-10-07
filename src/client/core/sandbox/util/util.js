'use strict';

export var isArray = function (obj) {
    return obj.constructor === Array;
};

export var nlToBr = function (str, is_xhtml) {   
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';    
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
};

export * from 'lodash';
