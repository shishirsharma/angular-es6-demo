'use strict';
'ngInject';

class MainController {
  constructor(Info) {
    this.Info = Info;
    this.getInfo();
  }

  getInfo() {
    this.Info.query().then(result => this.items = result.data);
  }
}

angular.module('angularEs6DemoApp').controller('MainCtrl', MainController);
