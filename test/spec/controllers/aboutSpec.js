'use strict';

describe('about', () => {

  // load the component controller's module
  beforeEach(module('demoApp'));

  const mockInfo = {
    id: 1,
    title: 'Angular',
    description: 'AngularJS is a toolset for building the framework most suited to your application development.'
  };

  let ctrl, httpBackend;

  // Initialize the component controller
  beforeEach(inject(($componentController, $httpBackend) => {
    const componentController = $componentController;
    httpBackend = $httpBackend;

    ctrl = componentController('about', null, {
      id: 1
    });
    ctrl.$onInit();

    httpBackend.expectGET('api/1.json').respond(mockInfo);
  }));

  it('should display one information', () => {
    httpBackend.flush();

    expect(ctrl.item).toEqual(mockInfo);
  });
});
