var angularApp = angular.module('myApp', []);

angularApp.controller('mainController', function($scope) {
    console.log($scope);
});

var searchPeople = function($scope, firstName, lastName, height, age, occupation) {
    return 'Jason Ou';
}

console.log(angular.injector().annotate(searchPeople));