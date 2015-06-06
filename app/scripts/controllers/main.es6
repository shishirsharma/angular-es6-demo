class MainController {
    constructor(Info) {
       this.Info = Info;
       this.getInfo();
    }

    getInfo() {
       let self = this;
       this.Info.query().then(result => self.results = result.data); 
    }
}

MainController.$inject = ['Info'];
angular.module('angularEs6DemoApp').controller('MainCtrl', MainController);
