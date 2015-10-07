'use strict';

import * as $ from 'jquery';

var get = function (url, data) { 
    return new Promise($.get(url, data)); 
};

var post = function (url, data) { 
    return new Promise($.post(url, data)); 
};  

var put = function (url, data) {
    return new Promise($.ajax({
        type: 'PUT',
        url: url,
        data: data
    }));
};

var _delete = function (url) {
    return new Promise($.ajax({
        type: 'DELETE',
        url: url
    }));
};

export { get, post, put, _delete as delete };

