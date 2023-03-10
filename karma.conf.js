//jshint strict: false
module.exports = function (config) {
  config.set({

    basePath: './app/components',

    files: [
      '**/*.spec.js'
      //   'lib/angular/angular.js',
      //   'lib/angular-route/angular-route.js',
      //   '../node_modules/angular-mocks/angular-mocks.js',
      //   'core/**/*.js',
      //   'view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine' /*, 'enzyme' */],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]
  });
};
