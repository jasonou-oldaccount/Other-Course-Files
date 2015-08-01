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

myApp.service('nameService', function() {
   
    var self = this;
    
    this.name = 'John Doe';
    
    this.namelength = function() {
        return self.name.length;
    };
    
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
       nameService.name = $scope.name; 
    });
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    
    
    $scope.number = $routeParams.num || 'No Value';
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
       nameService.name = $scope.name; 
    });
    
}]);
