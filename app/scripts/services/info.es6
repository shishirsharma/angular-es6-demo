"ngInject";

class InfoService {
	constructor($http) {
	  this.$http = $http;
	}

	query() {
	  return this.$http.get('data/info.json');
	}

	get(id) {
	  return this.$http.get(`data/${id}.json`);
	}

	static InfoFactory($http) {
	  return new InfoService($http);
	}
}

angular.module('angularEs6DemoApp').factory('Info', InfoService.InfoFactory);
