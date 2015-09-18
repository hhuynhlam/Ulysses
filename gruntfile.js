'use strict';

module.exports = function(grunt) {

var _ = require('lodash');
var jasmineOptions = {
    display: 'full',
    summary: true,
    template: require('grunt-template-jasmine-requirejs'),
    templateOptions: {
        requireConfigFile: './src/client/core/require-config.js',
        requireConfig: {
            baseUrl: './src/client/',
        }
    }
};

// Setup Grunt
grunt.initConfig({

    jasmine: {
        ui: {
            options: _.assign({
                specs: grunt.file.expand([
                    './src/client/**/*.spec.js',
                    '!./src/client/vendor/**/*.spec.js'
                ])
            }, jasmineOptions)
        },

        single: {
            options: _.assign({
                specs: grunt.file.expand([
                    './src/client/**/*' + grunt.option('file') + '.spec.js'
                ])
            }, jasmineOptions)
        }
    },

    watch: {
        tdd: {
            files: [
                './src/client/**/*' + grunt.option('file') + '.js',
                './src/client/**/*' + grunt.option('file') + '.spec.js'
            ],
            tasks: ['jasmine:single']
        }
    }

});

// Load Grunt plugins
grunt.loadNpmTasks('grunt-contrib-jasmine');
grunt.loadNpmTasks('grunt-contrib-watch');

// Register Grunt tasks
grunt.registerTask('default', []);
grunt.registerTask('test', ['jasmine:ui']);
grunt.registerTask('tdd', ['watch:tdd']);

};