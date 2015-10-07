'use strict';

import ko from 'knockout';
import InputViewModel from './input.viewmodel';

describe('InputViewModel', function() {
    
    it('can be instantiated', function () {
        var inputViewModel = new InputViewModel();
        expect(typeof inputViewModel).toBe('object');
        expect(typeof inputViewModel.init).toBe('function');
    });

    describe('/ after instantiated', function () {
        var inputViewModel;

        beforeEach(function () {
            inputViewModel = new InputViewModel();
        });

        // isVisible
        it('has isVisible property', function () {
            expect(inputViewModel.isVisible).toBeDefined();
        });

        it('can set isVisible property', function () {
            inputViewModel.isVisible(false);
            expect(inputViewModel.isVisible()).toBeFalsy();

            inputViewModel.isVisible(true);
            expect(inputViewModel.isVisible()).toBeTruthy();
        });

        // value
        it('has value property', function () {
            expect(inputViewModel.value).toBeDefined();
        });

        it('can set value property', function () {
            inputViewModel.value('new value');
            expect(inputViewModel.value()).toBe('new value');
        });

    });

    describe('/ after instantiated with publish topics', function () {
        var inputViewModel;

        beforeEach(function () {
            inputViewModel = new InputViewModel({
                id: 'TestInput',
                publish: ['TestPublishTopic1', 'TestPublishTopic2']
            });
            inputViewModel.init();
        });

        it('can publish value to topics', function () {
            var observable1 = ko.observable('default'),
                observable2 = ko.observable('default');
            
            observable1.subscribeTo('TestPublishTopic1');
            observable2.subscribeTo('TestPublishTopic2');

            inputViewModel.value('newValue');
        
            expect( observable1() ).toBe('newValue');
            expect( observable2() ).toBe('newValue');
        });

    });

    describe('/ after instantiated with publish function', function () {
        var observable = ko.observable('default'),
            inputViewModel;

        beforeEach(function () {
            inputViewModel = new InputViewModel({
                id: 'TestInput',
                publish: function (val) { observable(val); }
            });
            inputViewModel.init();
        });

        it('can publish to function', function () {
            inputViewModel.value('newValue');
            expect( observable() ).toBe('newValue');
        });

    });

    describe('/ with subscribe topics', function () {

        it('can subscribe to topic', function () {
            var inputViewModel = new InputViewModel({
                id: 'TestInput',
                subscribe: ['TestTopicA', 'TestTopicB']
            });
            inputViewModel.init();

            ko.postbox.publish('TestTopicA', 'newValueA');
            expect( inputViewModel.value() ).toBe('newValueA');

            ko.postbox.publish('TestTopicB', 'newValueB');
            expect( inputViewModel.value() ).toBe('newValueB');
        });

        it('can subscribe to topic, previously defined', function () {
            var inputViewModel; 

            ko.postbox.publish('TestTopicA', 'newValueA');

            inputViewModel = new InputViewModel({
                id: 'TestInput',
                subscribe: ['TestTopicA']
            });
            inputViewModel.init();

            expect( inputViewModel.value() ).toBe('newValueA');
        });

    });

});
