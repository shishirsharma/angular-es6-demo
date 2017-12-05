'use strict';

class AboutController {
  constructor(Info) {
    'ngInject';

    this.Info = Info;
  }

  $onInit() {
    this.item = '';
    this.getMoreInfo();
  }

  getMoreInfo() {
    const id = this.id;
    this.Info.get(id).then(result => this.item = result.data);
  }
}

angular.module('demoApp')
  .component('about', {
    controller: AboutController,
    controllerAs: 'ctrl',
    templateUrl: 'scripts/components/about/about.html',
    bindings: {
      id: '<'
    }
  });
