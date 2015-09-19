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
        'bootstrap'                     : 'vendor/bootstrap/dist/js/bootstrap.min',
        'cookie'                        : 'vendor/js-cookie/src/js.cookie',
        'jquery'                        : 'vendor/jquery/dist/jquery.min',
        'k'                             : 'vendor/kendo/js',
        'knockout'                      : 'vendor/knockout/dist/knockout',
        // 'knockout-postbox'              : 'vendor/knockout-postbox/build/knockout-postbox.min',
        'knockout-postbox'              : 'vendor/knockout-postbox/build/knockout-postbox',
        'lodash'                        : 'vendor/lodash/lodash.min',
        'moment'                        : 'vendor/moment/min/moment.min',
        'q'                             : 'vendor/q/q',
        'sammy'                         : 'vendor/sammy/lib/min/sammy-0.7.6.min',

        // RequireJS Plugins
        'async'                         : 'vendor/requirejs-plugins/src/async',
        'font'                          : 'vendor/requirejs-plugins/src/font',
        'goog'                          : 'vendor/requirejs-plugins/src/goog',
        'image'                         : 'vendor/requirejs-plugins/src/image',
        'json'                          : 'vendor/requirejs-plugins/src/json',
        'markdownConverter'             : 'vendor/requirejs-plugins/lib/Markdown.Converter',
        'mdown'                         : 'vendor/requirejs-plugins/src/mdown',
        'noext'                         : 'vendor/requirejs-plugins/src/noext',
        'propertyParser'                : 'vendor/requirejs-plugins/src/propertyParser',
        'text'                          : 'vendor/requirejs-plugins/lib//text'
    },
    
    shim: {
        'jquery'                        : { exports: 'jQuery' },
        'bootstrap'                     : { deps: ['jquery'] },
        'k/kendo.core.min'              : { deps: ['jquery'] },
        'sammy'                         : { deps: ['jquery'] }
    },

    map: {
        '*': {
            'css'                       : 'vendor/require-css/css.min',   // RequireJS CSS Plugin
            'kendo'                     : 'k/kendo.core.min'
        }
    }
});