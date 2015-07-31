var person = {
    firstname: 'John',
    
    lastname: 'Doe',
    
    getFullName: function() {
        
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
        
    }
}

var logName = function(lang1, lang2) {
    
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log("--------------------");
    
}

// Bind
var logPersonName = logName.bind(person);

logPersonName('en');

// Call
logName.call(person, 'en', 'es');

// Apply
logName.apply(person, ['en', 'es']);

// Function Borrowing
var person2 = {
    
    firstname: 'Jane',
    lastname: 'Doe'

}

console.log(person.getFullName.apply(person2));

// Function Currying
function multiply(a, b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2);

console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);

console.log(multipleByThree(4));
