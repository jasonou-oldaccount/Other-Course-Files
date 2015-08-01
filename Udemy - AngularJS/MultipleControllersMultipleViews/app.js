var angularApp = angular.module('myApp', []);

angularApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.name = 'Main';
    
}]);


angularApp.controller('secondController', ['$scope', function($scope) {
    
    $scope.name = 'Second';
    
}]);