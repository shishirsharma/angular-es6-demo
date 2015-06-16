'use strict';
'ngInject';

class InfoService {
	constructor($http) {
	  this.$http = $http;
	}

	query() {
	  return this.$http.get('api/info.json');
	}

	get(id) {
	  return this.$http.get(`api/${id}.json`);
	}
}

angular.module('angularEs6DemoApp').factory('Info', $http => new InfoService($http));