var angularApp = angular.module('myApp', []);

angularApp.controller('mainController', function() {
    
});

var things = [1, '2', 3,function() {
                            alert('Hello!');
                        }];

things[3]();

console.log(things);