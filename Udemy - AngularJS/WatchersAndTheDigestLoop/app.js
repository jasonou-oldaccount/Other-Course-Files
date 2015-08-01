var angularApp = angular.module('myApp', []);

angularApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.handle = '';
    
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    }
    
    $scope.$watch('handle', function(newValue, oldValue) {
        
        console.info('Changed!');
        console.log('Old: ' + oldValue);
        console.log('New: ' + newValue);
        
    });
    
    setTimeout(function() {
        $scope.$apply(function() {
            $scope.handle = 'newtwitterhandle';
            console.log('Scope Changed!');           
        });
    }, 3000);
    
}]);

