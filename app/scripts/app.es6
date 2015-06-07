"ngInject";

angular
  .module('angularEs6DemoApp', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch'])
  .config($routeProvider => {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as ctrl'
      })
      .when('/about/:infoId', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl as ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });