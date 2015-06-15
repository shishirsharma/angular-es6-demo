'use strict';

describe('Controller: AboutCtrl', () => {

  // load the controller's module
  beforeEach(module('angularEs6DemoApp'));

  let AboutCtrl, scope, httpBackend;
  let itemData = {
    id:1,
    title: 'Angular',
    description: 'AngularJS is a toolset for building the framework most suited to your application development.'
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller, $rootScope, $routeParams, $httpBackend) => {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;

    $routeParams.infoId = 1;
    httpBackend.expectGET('api/1.json').respond(itemData);

    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope,
      $routeParams: $routeParams
    });
  }));

  it('should display one information', () => {
    httpBackend.flush();

    expect(scope.item).toEqual(itemData);
  });
});
