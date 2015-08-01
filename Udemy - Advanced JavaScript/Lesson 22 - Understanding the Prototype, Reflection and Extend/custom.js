var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
};

var john = {
    firstname: 'John',
    lastname: 'Doe' 
};

// demo purposes only, do not use this in real apps
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);

for(var prop in john) {
    if(john.hasOwnProperty(prop)) {
        console.log(prop + ' : ' + john[prop]);
    };   
}

var jane = {
    address: '111 Main St.',
    getFormalName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

_.extend(john, jane, jim);

console.log(john);