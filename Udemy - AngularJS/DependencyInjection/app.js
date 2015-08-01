var angularApp = angular.module('myApp', []);

angularApp.controller('mainController', function() {
    
});

var Person = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

function logPerson(personObj) {
    console.log(jason);
}

var jason = new Person('Jason', 'Ou');

logPerson(jason);