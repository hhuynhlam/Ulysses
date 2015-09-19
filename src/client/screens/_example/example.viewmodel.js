'use strict';

define(function (require) {
    var dropdownWidget = require('dropdown.widget');
    var inputWidget = require('input.widget');

    var ExampleViewModel = function () {
        
    };

    ExampleViewModel.prototype.init = function init () {
        
        dropdownWidget.create({
            id: 'SampleDropDown',
            dataTextField: 'name',
            dataValueField: 'id',
            // dataSource: [
            //     { text: 'Patrick Willis', value: 52 },
            //     { text: 'Navarro Bowman', value: 53 },
            //     { text: 'Aldon Smith', value: 99 },
            //     { text: 'Ahmad Brooks', value: 0 }
            // ]
            remote: 'http://jsonplaceholder.typicode.com/users', 
            cascade: ['DropDownTopicA'],
            subscribe: ['DropDownTopicB']
        });

        inputWidget.create({
            id: 'SampleInput',
            publish: ['InputTopicA'],
            subscribe: ['InputTopicB']
        });
    
    };

    return ExampleViewModel;
});