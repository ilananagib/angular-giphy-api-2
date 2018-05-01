console.log('client.js');

const app = angular.module('GiphyApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
  })
    .when('/search', {
      templateUrl: 'views/search.html',
      controller: 'SearchController as vm',
    })
    .when('/random', {
      templateUrl: 'views/random.html',
      controller: 'RandomController as vm',
    })
    .otherwise({
      template: `<h2>404</h2>`
    })
}); 