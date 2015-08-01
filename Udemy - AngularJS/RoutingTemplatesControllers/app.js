var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.htm',
        controller: 'mainController'
    })

    .when('/second', {
        templateUrl: 'pages/second.htm',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.htm',
        controller: 'secondController'
    })
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    $scope.number = $routeParams.num || 'No Value';
    
}]);
