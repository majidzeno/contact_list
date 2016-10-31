var myApp = angular.module('myApp',['ngRoute','artistControllers']);
myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/list',{
    templateUrl : 'views/list.html',
    controller : 'ListController'
  }).
  when('/details/:userId',{
    templateUrl : 'views/details.html',
    controller : 'DetailsController'
  }).
  otherwise({
    redirectTo:'/list'
  });
}]);
