'use strict';

/**
 * @ngdoc overview
 * @name alzipurskyApp
 * @description
 * # alzipurskyApp
 *
 * Main module of the application.
 */
angular
  .module('alzipurskyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
