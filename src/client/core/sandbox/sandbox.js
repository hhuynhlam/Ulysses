'use strict';

import http from './http/http';
import msg from './msg/msg';
import util from './util/util';

var sandbox = {
    http: http,
    msg: msg,
    util: util
};
    
export default sandbox;