'use strict';
'ngInject';

class ContactController {
  constructor() {
    this.contactInfo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.';
  }
}

angular.module('angularEs6DemoApp').controller('ContactCtrl', ContactController);
