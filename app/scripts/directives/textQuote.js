'use strict';
'ngInject';

class TextQuoteDirective {
  constructor($log) {
    this.restrict = 'E';
    this.scope = {
      data: '='
    };
    this.template = '<blockquote>{{textInfo}}</blockquote>';
    this.$log = $log;
  }

  compile() {
    return this.link.bind(this);
  }

  link (scope) {
    scope.textInfo = scope.data.toUpperCase();
    this.$log.info(scope.textInfo);
  }
}

angular.module('angularEs6DemoApp').directive('textQuote', $log => new TextQuoteDirective($log));
