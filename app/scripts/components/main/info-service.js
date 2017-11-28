'use strict';

class InfoService {
  constructor($http) {
    'ngInject';
    
    this.$http = $http;
  }

  query() {
    return this.$http.get('api/info.json');
  }

  get(id) {
    return this.$http.get(`api/${id}.json`);
  }
}

angular.module('demoApp').factory('Info', $http => new InfoService($http));
