
class TextQuoteDirective { 
  constructor() {
    this.restrict = 'E';
    this.scope = {
      data: '='
    };
    this.template = '<blockquote>{{textInfo}}</blockquote>';
  }

  link (scope, element, attrs) {
    scope.textInfo = scope.data.toUpperCase();
  }

  static directiveFactory() {
    return new TextQuoteDirective();
  }
}

angular.module('angularEs6DemoApp').directive('textQuote', TextQuoteDirective.directiveFactory);