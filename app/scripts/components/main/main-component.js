'use strict';

class MainController {
  constructor(Info) {
    'ngInject';
    this.Info = Info;
  }

  $onInit() {
    this.items = [];
    this.getInfo();
  }

  getInfo() {
    this.Info.query().then(result => this.items = result.data);
  }
}

angular.module('demoApp')
  .component('main', {
    controller: MainController,
    controllerAs: 'ctrl',
    templateUrl: 'scripts/components/main/main.html'
  });
