'use strict';

describe('Controller: MainCtrl', () => {

  // load the controller's module
  beforeEach(module('angularEs6DemoApp'));

  let MainCtrl, scope, httpBackend;

  const infoData = [{
        id: 1,
        title: 'HTML5 Boilerplate',
        description: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
  }];

  // Initialize the controller and a mock scope
  beforeEach(inject( ($controller, $rootScope, $httpBackend) => {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;

    MainCtrl = $controller('MainCtrl', {});
  }));

  it('should display a list of information', () => {
    httpBackend.when('GET', 'api/info.json').respond(infoData);
    httpBackend.flush();
    expect(MainCtrl.items.length).toBe(1);
  });
});
