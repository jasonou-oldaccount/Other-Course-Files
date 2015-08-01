var angularApp = angular.module('myApp', ['ngMessages', 'ngResource']);

angularApp.controller('mainController', function($scope, $log, $filter, $resource) {
    $log.log("Hello.");
    $log.info("This is some information.");
    $log.warn("Warning!");
    $log.debug("Some debug information while writing my code.");
    $log.error("This was an error!");
    
    $scope.name = 'Jason';
    $scope.formattedname = $filter('uppercase')($scope.name);
    
    $log.info($scope.name);
    $log.info($scope.formattedname);
    
    console.log($resource);
});