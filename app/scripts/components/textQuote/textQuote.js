'use strict';

class TextQuoteController {
  constructor($log) {
    'ngInject';

    this.$log = $log;
  }

  $onInit() {
    this.textInfo = this.data.toUpperCase();
    this.$log.info(this.textInfo);
  }
}

angular.module('demoApp')
  .component('textQuote', {
    bindings: {
      data: '='
    },
    controller: TextQuoteController,
    controllerAs: 'ctrl',
    template: '<blockquote>{{ctrl.textInfo}}</blockquote>'
  });
