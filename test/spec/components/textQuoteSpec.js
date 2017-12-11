'use strict';

describe('textQuote', () => {
  // load the component controller's module
  beforeEach(module('demoApp'));

  let ctrl;

  // Initialize the component controller
  beforeEach(inject($componentController => {
    ctrl = $componentController('textQuote', null, {
      data: 'Lorem ipsum'
    });
    ctrl.$onInit();
  }));

  it('should display the information', () => {
    expect(ctrl.textInfo).toContain('LOREM IPSUM');
  });
});
