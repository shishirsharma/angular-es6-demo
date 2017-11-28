# AngularJS 1.5 (ES2015) with components &amp; Grunt &amp; Bower

## Example Component Classes

### Main app
```
angular.module('demoApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch'])
  .config($routeProvider => {
    $routeProvider
      .when('/', {
        template: '<main></main>'
      })
      .when('/about/:infoId', {
        template: '<about id="$resolve.infoId"></about>',
        resolve: {
          infoId: $route => {
            return $route.current.params.infoId;
          }
        }
      })
      .when('/contact', {
        template: '<contact></contact>'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
```

### Component 1
```
class MainController {
  constructor(Info) {
    this.Info = Info;
  }

  $onInit() {
    this.items = [];
    this.getInfo();
  }

  getInfo() {
    this.Info.query().then(result => this.items = result.data);
  }
}

angular.module('demoApp')
  .component('main', {
    controller: MainController,
    controllerAs: 'ctrl',
    templateUrl: 'scripts/components/main/main.html'
  });
```

### Component 2

```
class TextQuoteController {
  constructor($log) {
    this.$log = $log;
  }

  $onInit() {
    this.textInfo = this.data.toUpperCase();
    this.$log.info(this.textInfo);
  }
}

angular.module('demoApp')
  .component('textQuote', {
    bindings: {
      data: '='
    },
    controller: TextQuoteController,
    controllerAs: 'ctrl',
    template: '<blockquote>{{ctrl.textInfo}}</blockquote>'
  });
```

### Component 3

```
class AboutController {
  constructor(Info) {
    this.Info = Info;
  }

  $onInit() {
    this.item = '';
    this.getMoreInfo();
  }

  getMoreInfo() {
    const id = this.id;
    this.Info.get(id).then(result => this.item = result.data);
  }
}

angular.module('demoApp')
  .component('about', {
    controller: AboutController,
    controllerAs: 'ctrl',
    templateUrl: 'scripts/components/about/about.html',
    bindings: {
      id: '<'
    }
  });
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

angular.module('demoApp').factory('Info', $http => new InfoService($http));
```

## Tests

### Controller

```
describe('Controller: MainCtrl', () => {

  // load the controller's module
  beforeEach(module('demoApp'));

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

    MainCtrl = $controller('MainCtrl', {});
  }));

  it('should display a list of information', () => {
    httpBackend.when('GET', 'api/info.json').respond(infoData);
    httpBackend.flush();
    expect(MainCtrl.items.length).toBe(1);
  });
});
```

### Directive

```
describe('Directive: textQuote', () => {

  // load the controller's module
  beforeEach(module('demoApp'));

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
npm run serve
```

## Test

```
npm test
```

## Contributing

1. Fork it ( https://github.com/twintags/angular-es6-demo/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request


## License
[GNU General Public License](LICENSE)
