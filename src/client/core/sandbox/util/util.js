'use strict';

import _ from 'lodash';

var utils = {
    isArray: function (obj) {
        return obj.constructor === Array;
    },

    nlToBr: function (str, is_xhtml) {   
        var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';    
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
    }
};

// merge _ with custom utils
utils = _.assign( _, utils );

export default utils;
