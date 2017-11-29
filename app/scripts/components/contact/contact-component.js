'use strict';

class ContactController {
  constructor() {
  }

  $onInit() {
    this.contactInfo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.';
  }
}

angular.module('demoApp')
  .component('contact', {
    controller: ContactController,
    controllerAs: 'ctrl',
    templateUrl: 'scripts/components/contact/contact.html'
  });
