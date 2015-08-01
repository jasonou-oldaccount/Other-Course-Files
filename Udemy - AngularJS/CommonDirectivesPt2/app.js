var angularApp = angular.module('myApp', []);

angularApp.controller('mainController', ['$scope', function($scope) {
    $scope.alertClick = function() {
        alert("Clicked!");
    }
    
    $scope.name = 'John Doe';
}]);

