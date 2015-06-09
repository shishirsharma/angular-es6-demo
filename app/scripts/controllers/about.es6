"ngInject";

class AboutController {
    constructor($routeParams, $scope, Info) {
       this.$routeParams = $routeParams;
       this.$scope = $scope;
       this.Info = Info;
       this.getMoreInfo();
    }

    getMoreInfo() {
       let self = this;
       let id = this.$routeParams.infoId;
       this.Info.get(id).then(result => self.$scope.item = result.data); 
    }
}

angular.module('angularEs6DemoApp').controller('AboutCtrl', AboutController);
