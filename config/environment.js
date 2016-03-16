/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pinky',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy = {
      'default-src': "'none' http://10.28.0.37:3001 http://dev.reebok.ecatalogue.netural.com",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' http://dev.ecatalogue.netural.com http://dev.reebok.ecatalogue.netural.com", // Allow scripts from https://cdn.mxpnl.com
      'font-src': "'self' http://dev.reebok.ecatalogue.netural.com", // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': "'self' http://10.28.0.37:3001 http://api.dev.ecatalogue.netural.com http://dev.reebok.ecatalogue.netural.com http://api.dev.reebok.ecatalogue.netural.com http://guestftp.netural.com http://qa-ecatalogue-adidas.adidas-group.com http://hp.qa.static.adidas.com", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': "'self' data: http://placehold.it https://placeholdit.imgix.net http://guestftp.netural.com http://dev.reebok.ecatalogue.netural.com http://qa-ecatalogue-adidas.adidas-group.com http://hp.qa.static.adidas.com http://dev.ecatalogue.netural.com/",
      'style-src': "'self' 'unsafe-inline' http://dev.ecatalogue.netural.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com 
      'media-src': "'self' data: http://dev.reebok.ecatalogue.netural.com http://dev.ecatalogue.netural.com",
      'object-src': "'self' 'default-src' http://dev.ecatalogue.netural.com",
      'child-src': "'self' 'default-src' blob: http://dev.ecatalogue.netural.com" 
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
