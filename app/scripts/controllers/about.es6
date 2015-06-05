class AboutController {
    constructor($scope) {
	    $scope.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
    }
}
AboutController.$inject = ['$scope'];
angular.module('angularEs6DemoApp').controller('AboutCtrl', AboutController);
