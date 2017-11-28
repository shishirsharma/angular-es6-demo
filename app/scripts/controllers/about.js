'use strict';
'ngInject';

class AboutController {
  constructor($routeParams, Info) {
    this.$routeParams = $routeParams;
    this.Info = Info;
    this.getMoreInfo();
  }

  getMoreInfo() {
    const id = this.$routeParams.infoId;
    this.Info.get(id).then(result => this.item = result.data);
  }
}

angular.module('angularEs6DemoApp').controller('AboutCtrl', AboutController);
