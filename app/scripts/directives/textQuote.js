'use strict';
'ngInject';

const DIRECTIVE = new Map();

class TextQuoteDirective {
  constructor($log) {
    this.restrict = 'E';
    this.scope = {
      data: '='
    };
    this.template = '<blockquote>{{textInfo}}</blockquote>';

    DIRECTIVE.set('$log', $log);
  }

  link (scope) {
    scope.textInfo = scope.data.toUpperCase();
    DIRECTIVE.get('$log').info(scope.textInfo);
  }
}

angular.module('angularEs6DemoApp').directive('textQuote', $log => new TextQuoteDirective($log));
