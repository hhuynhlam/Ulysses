System.config({
  baseURL: "",
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "github:*": "../../client/vendor/github/*"
  },

  map: {
    "traceur": "github:jmcriffey/bower-traceur@0.0.91",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.91"
  }
});
