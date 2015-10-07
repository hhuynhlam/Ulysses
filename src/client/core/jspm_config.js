System.config({
  baseURL: "",
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "sandbox": "core/sandbox/sandbox",

    "github:*": "vendor/github/*",
    "npm:*": "vendor/npm/*"
  },
  directories: {
    "license:*": "vendor/license/*"
  },

  map: {
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "jquery": "github:components/jquery@2.1.4",
    "k": "license:kendo/js",
    "knockout": "github:knockout/knockout@3.3.0",
    "knockout-postbox": "github:rniemeyer/knockout-postbox@0.5.2",
    "lodash": "npm:lodash@3.10.1",
    "moment": "github:moment/moment@2.10.6",
    "sammy": "github:quirkey/sammy@0.7.6",
    "traceur": "github:jmcriffey/bower-traceur@0.0.91",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.91",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
