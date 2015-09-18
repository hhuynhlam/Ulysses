'use strict';

define(function (require) {
    var _ = require('lodash');

    var eventType = require('json!static/event-type.json');
    var roles = require('json!static/role.json');

    var constant = {
        
        cutoffHours: {
            SERVICE: 72,
            FELLOWSHIP: 0
        },

        eventType: {
            GENERAL_FELLOWSHIP: function () { return this.GENERAL; },
            GENERAL_EVENT: function () { return this.MEETING + this.OTHER; },
            INTERCHAPTER: function () { return this.INTERCHAPTER_HOME + this.INTERCHAPTER_AWAY ; },

            toString: function (code) {
                var result = [];

                if (code & this.CAMPUS) { return 'Campus'; }
                else if (code & this.COMMUNITY) { return 'Community'; }
                else if (code & this.FRATERNITY) { return 'Fraternity'; }
                else if (code & this.FUNDRAISER) { return 'Fundraiser'; }
                else if (code & this.NATION) { return 'Nation'; }

                else if (code & this.COOL_FELLOWSHIP) { return 'Cool Fellowship'; }
                else if (code & this.CRAZY_FELLOWSHIP) { return 'Crazy Felowship'; }
                else if (code & this.SEXY_FELLOWSHIP) { return 'Sexy Fellowship'; }

                if (code & this.GENERAL_EVENT()) { result.push('General Event'); }
                if(code & this.SERVICE) { result.push('Service'); }
                if (code & this.FELLOWSHIP) { result.push('Fellowship'); }
                if (code & this.INTERCHAPTER_HOME) { result.push('Interchapter Home'); }
                if (code & this.INTERCHAPTER_AWAY) { result.push('Interchapter Away'); }

                return result.join(', ');
            }
        },

        role: {

            // The following define groups that can sign up for events or view important dates on homepage
            OPEN_EVERYONE: function () {
                return this.ACTIVE + this.PLEDGE + this.ALUMNUS + this.PROBATIONARY + this.ASSOCIATE + this.AFFILIATE + this.INACTIVE;
            },
            
            OPEN_ACTIVE: function () {
                return this.ACTIVE + this.ALUMNUS + this.PROBATIONARY + this.ASSOCIATE + this.AFFILIATE + this.INACTIVE;
            }
        }

    };

    // merge json with functions
    constant.eventType = _.merge(constant.eventType, eventType);
    constant.role = _.merge(constant.role, roles);

    return constant;
});