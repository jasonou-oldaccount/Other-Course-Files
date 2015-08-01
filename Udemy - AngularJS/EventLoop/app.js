var angularApp = angular.module('myApp', []);

angularApp.controller('mainController', ['$scope', function($scope) {

    var tb = document.getElementById('name');
    
    $scope.action = 'No Action';
    
    tb.addEventListener('keypress',
        function(event) {
            $scope.$apply(function() {
                $scope.action = 'Key Pressed';
            });
        });

    tb.addEventListener('click',
        function(event) {
            $scope.$apply(function() {
                $scope.action = 'Mouse Clicked';
            });
        });

    tb.addEventListener('mouseover',
        function(event) {
            $scope.$apply(function() {
                $scope.action = 'Mouse Hovered Over';
            });
        });
    
}]);

