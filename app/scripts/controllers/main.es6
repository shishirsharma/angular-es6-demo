class MainController {
    constructor($scope) {
	    $scope.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
    }
}
MainController.$inject = ['$scope'];
angular.module('angularEs6DemoApp').controller('MainCtrl', MainController);
