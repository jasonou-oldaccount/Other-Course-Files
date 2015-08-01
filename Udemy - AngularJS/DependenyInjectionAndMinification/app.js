var angularApp = angular.module('myApp', []);

angularApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);