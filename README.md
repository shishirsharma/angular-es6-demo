# AngularJS ES6, Grunt &amp; Bower

## Example Component Classes

### Controller
```
class MainController {
    constructor(Info, $scope) {
       this.Info = Info;
       this.$scope = $scope;
       this.getInfo();
    }

    getInfo() {
       const self = this;
       this.Info.query().then(result => self.$scope.items = result.data);
    }
}

angular.module('angularEs6DemoApp').controller('MainCtrl', MainController);
```

### Directive

```
class TextQuoteDirective {
  constructor($log) {
    this.restrict = 'E';
    this.scope = {
      data: '='
    };
    this.template = '<blockquote>{{textInfo}}</blockquote>';
    this.$log = $log;

    this.link = this.link.bind(this);
  }

  link (scope) {
    scope.textInfo = scope.data.toUpperCase();
    this.$log.info(scope.textInfo);
  }
}

angular.module('angularEs6DemoApp').directive('textQuote', $log => new TextQuoteDirective($log));
```

### Service

```
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
```

## Tests

### Controller

```
describe('Controller: MainCtrl', () => {

  // load the controller's module
  beforeEach(module('angularEs6DemoApp'));

  let MainCtrl, scope, httpBackend;

  const infoData = [{
        id: 1,
        title: 'HTML5 Boilerplate',
        description: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
  }];

  // Initialize the controller and a mock scope
  beforeEach(inject( ($controller, $rootScope, $httpBackend) => {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;

    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should display a list of information', () => {
    httpBackend.when('GET', 'api/info.json').respond(infoData);
    httpBackend.flush();
    expect(scope.items.length).toBe(1);
  });
});
```

### Directive

```
describe('Directive: textQuote', () => {

  // load the controller's module
  beforeEach(module('angularEs6DemoApp'));

  let scope, compile, element;

  // Polyfill Function.prototype.bind for PhantomJS
  Function.prototype.bind = Function.prototype.bind || function (thisp) {
    const fn = this;
    return function () {
      return fn.apply(thisp, arguments);
    };
  };

  // Initialize a mock scope
  beforeEach(inject(($rootScope, $compile) => {
    scope = $rootScope.$new();
    compile = $compile;

    scope.contactInfo = 'Lorem ipsum';
    element = angular.element('<text-quote data="contactInfo"></text-quote>');

    compile(element)(scope);
    scope.$digest();
  }));

  it('should display a blockquote tag', () => {
    expect(element.find('blockquote').length).toBe(1);
  });

  it('should display the information', () => {
    expect(element.html()).toContain('LOREM IPSUM');
  });
});
```

## Installation

```
npm install
bower install
grunt serve
```

## Test

```
grunt test
```

## Contributing

1. Fork it ( https://github.com/twintags/angular-es6-demo/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request


## License
[GNU General Public License](LICENSE)
