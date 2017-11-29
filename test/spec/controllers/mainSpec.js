'use strict';

describe('main', () => {

  // load the component controller's module
  beforeEach(module('demoApp'));

  const mockInfo = [{
    id: 1,
    title: 'HTML5 Boilerplate',
    description: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
  }];

  let ctrl, httpBackend;

  // Initialize the component controller
  beforeEach(inject(($componentController, $httpBackend) => {
    const componentController = $componentController;
    httpBackend = $httpBackend;

    ctrl = componentController('main', null, {});
    ctrl.$onInit();
  }));

  it('should display a list of information', () => {
    httpBackend.when('GET', 'api/info.json').respond(mockInfo);
    httpBackend.flush();

    expect(ctrl.items.length).toBe(1);
  });
});
