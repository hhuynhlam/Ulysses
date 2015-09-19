require.config({
    baseUrl: '',
    paths: {

        // -------------------------------- GENERATOR --------------------------------------
        // Example
        'example.router'                : 'screens/_example/example.router',
        'example.viewmodel'             : 'screens/_example/example.viewmodel',

        'base-widget.viewmodel'         : 'widgets/core/base/base-widget.viewmodel',

        'dropdown.viewmodel'            : 'widgets/core/dropdown/dropdown.viewmodel',
        'dropdown.widget'               : 'widgets/core/dropdown/dropdown',

        'input.viewmodel'               : 'widgets/core/input/input.viewmodel',
        'input.widget'                  : 'widgets/core/input/input',
        
        // --------------------------------- PLATFORM --------------------------------------
        // Core
        'sandbox'                       : 'core/sandbox/sandbox',

        // Vendor
        'bootstrap'                     : 'vendor/bower_components/bootstrap/dist/js/bootstrap.min',
        'cookie'                        : 'vendor/bower_components/js-cookie/src/js.cookie',
        'jquery'                        : 'vendor/bower_components/jquery/dist/jquery.min',
        'k'                             : 'vendor/bower_components/kendo/js',
        'knockout'                      : 'vendor/bower_components/knockout/dist/knockout',
        // 'knockout-postbox'              : 'vendor/bower_components/knockout-postbox/build/knockout-postbox.min',
        'knockout-postbox'              : 'vendor/bower_components/knockout-postbox/build/knockout-postbox',
        'lodash'                        : 'vendor/bower_components/lodash/lodash.min',
        'moment'                        : 'vendor/bower_components/moment/min/moment.min',
        'q'                             : 'vendor/bower_components/q/q',
        'sammy'                         : 'vendor/bower_components/sammy/lib/min/sammy-0.7.6.min',

        // RequireJS Plugins
        'async'                         : 'vendor/bower_components/requirejs-plugins/src/async',
        'font'                          : 'vendor/bower_components/requirejs-plugins/src/font',
        'goog'                          : 'vendor/bower_components/requirejs-plugins/src/goog',
        'image'                         : 'vendor/bower_components/requirejs-plugins/src/image',
        'json'                          : 'vendor/bower_components/requirejs-plugins/src/json',
        'markdownConverter'             : 'vendor/bower_components/requirejs-plugins/lib/Markdown.Converter',
        'mdown'                         : 'vendor/bower_components/requirejs-plugins/src/mdown',
        'noext'                         : 'vendor/bower_components/requirejs-plugins/src/noext',
        'propertyParser'                : 'vendor/bower_components/requirejs-plugins/src/propertyParser',
        'text'                          : 'vendor/bower_components/requirejs-plugins/lib//text'
    },
    
    shim: {
        'jquery'                        : { exports: 'jQuery' },
        'bootstrap'                     : { deps: ['jquery'] },
        'k/kendo.core.min'              : { deps: ['jquery'] },
        'sammy'                         : { deps: ['jquery'] }
    },

    map: {
        '*': {
            'css'                       : 'vendor/bower_components/require-css/css.min',   // RequireJS CSS Plugin
            'kendo'                     : 'k/kendo.core.min'
        }
    }
});