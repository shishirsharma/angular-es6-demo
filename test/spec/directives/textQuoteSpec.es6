'use strict';

describe('Directive: textQuote', () => {

  // load the controller's module
  beforeEach(module('angularEs6DemoApp'));

  let scope, compile, element;

  // Initialize a mock scope
  beforeEach(inject(($rootScope, $compile) => {
    scope = $rootScope.$new();
    compile = $compile;

    scope.contactInfo = 'Lorem ipsum';
    element = angular.element('<text-quote data="contactInfo"></text-quote>');

    compile(element)(scope);
    scope.$digest();
  }));

  it('should display a blockquote tag', () => {
    expect(element.find('blockquote').length).toBe(1);
  });

  it('should display the information', () => {
    expect(element.html()).toContain('LOREM IPSUM');
  });
});
