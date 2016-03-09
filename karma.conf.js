'use strict';

module.exports = function (config) {
  var defaults = {
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'test/**/*.spec.js'
    ],
    exclude: [],
    reporters: ['mocha'],
    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd',
        timeout: '2000'
      }
    },
    reportSlowerThan: 500,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    // don't open any browsers
    // we'll do it with browsersync
    // browsers: [],
    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-mocha-reporter'
    ],
    singleRun: true
  };

  config.set(defaults);
};
