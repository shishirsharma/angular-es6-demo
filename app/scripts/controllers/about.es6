"ngInject";

class AboutController {
    constructor($routeParams, Info) {
       this.$routeParams = $routeParams;
       this.Info = Info;
       this.getMoreInfo();
    }

    getMoreInfo() {
       let self = this;
       let id = this.$routeParams.infoId;
       this.Info.get(id).then(result => self.result = result.data); 
    }
}

angular.module('angularEs6DemoApp').controller('AboutCtrl', AboutController);
