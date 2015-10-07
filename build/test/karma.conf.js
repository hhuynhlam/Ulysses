'use strict';

// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../src/client/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // frameworks: ['systemjs', 'jasmine'],
    frameworks: ['systemjs', 'jasmine'],

    // list of files / patterns to load in the browser
    files: [
      '**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
      'vendor/**/*.spec.js'
    ],

    // SystemJS configuration
    systemjs: {

      // Path to your SystemJS configuration file 
      configFile: './core/jspm_config.js',
   
      // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries. 
      serveFiles: [
          './**/*.html',
          './**/*.js',
          '../../node_modules/es6-module-loader/**/*.js',
          '../../node_modules/systemjs/**/*.js',
          '../../node_modules/traceur/**/*.js'
      ],
   
      // SystemJS configuration specifically for tests, added after your config file. 
      // Good for adding test libraries and mock modules 
      config: {
        paths: {
          'es6-module-loader': '../../node_modules/es6-module-loader/dist/es6-module-loader.js',
          'systemjs': '../../node_modules/systemjs/dist/system.js',
          'system-polyfills': '../../node_modules/systemjs/dist/system-polyfills.js',
          'traceur': '../../node_modules/traceur/bin/traceur.js'
        }
      }
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
        // 'Chrome' 
        'PhantomJS2'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
