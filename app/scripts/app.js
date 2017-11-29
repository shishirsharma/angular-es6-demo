'use strict';

angular.module('demoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config($routeProvider => {
    'ngInject';

    $routeProvider
      .when('/', {
        template: '<main></main>'
      })
      .when('/about/:infoId', {
        template: '<about id="$resolve.infoId"></about>',
        resolve: {
          infoId: $route => {
            return $route.current.params.infoId;
          }
        }
      })
      .when('/contact', {
        template: '<contact></contact>'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
