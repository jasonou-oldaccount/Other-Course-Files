var angularApp = angular.module('myApp', []);

angularApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    
    $scope.name = 'Jason';
    
    $timeout(function() {
        
        $scope.name = 'Everybody';
        
    }, 3000);
    
}]);