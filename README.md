# AngularJS 1.6 (ES2015+) with components &amp; Grunt &amp; Bower

## Example Component Classes

### Main app
```
angular.module('demoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config($routeProvider => {
    'ngInject';

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
    templateUrl: 'views/main.html'
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
    templateUrl: 'views/about.html',
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

### Component 1

```
describe('main', () => {

  // load the component controller's module
  beforeEach(module('demoApp'));

  const mockInfo = [{
    id: 1,
    title: 'HTML5 Boilerplate',
    description: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
  }];

  let ctrl, httpBackend;

  // Initialize the component controller
  beforeEach(inject(($componentController, $httpBackend) => {
    const componentController = $componentController;
    httpBackend = $httpBackend;

    ctrl = componentController('main', null, {});
    ctrl.$onInit();
  }));

  it('should display a list of information', () => {
    httpBackend.when('GET', 'api/info.json').respond(mockInfo);
    httpBackend.flush();

    expect(ctrl.items.length).toBe(1);
  });
});
```

### Component 2

```
describe('textQuote', () => {
  // load the component controller's module
  beforeEach(module('demoApp'));

  let ctrl;

  // Initialize the component controller
  beforeEach(inject($componentController => {
    ctrl = $componentController('textQuote', null, {
      data: 'Lorem ipsum'
    });
    ctrl.$onInit();
  }));

  it('should display the information', () => {
    expect(ctrl.textInfo).toContain('LOREM IPSUM');
  });
});
```

## Installation

```
npm install
npm run serve
```

## Build

```
npm run build
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
