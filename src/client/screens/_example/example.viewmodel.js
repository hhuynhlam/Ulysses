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
            dataSource: { 
                transport: { 
                    read: 'http://jsonplaceholder.typicode.com/users' 
                }
            }, 
            change: ['ChangeTopicA'],
            close: ['CloseTopicA'],
            dataBound: ['DataBoundTopicA'],
            filtering: ['FilteringTopicA'],
            open: ['OpenTopicA'],
            select: ['SelectTopicA'],
            cascade: ['CascadeTopicA'],

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