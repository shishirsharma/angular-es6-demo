'use strict';
'ngInject';

class MainController {
  constructor(Info, $scope) {
    this.Info = Info;
    this.$scope = $scope;
    this.getInfo();
  }

  getInfo() {
    const self = this;
    this.Info.query().then(result => self.$scope.items = result.data);
  }
}

angular.module('angularEs6DemoApp').controller('MainCtrl', MainController);
