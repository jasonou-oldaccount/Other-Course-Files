var Tony = {
    firstname: 'Tony',
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};

var greet = function(person) {
   console.log('Hi ' + person.firstname + ' ' + person.lastname);
};

greet(Tony);

greet({
    firstname: 'Mary',
    lastname: 'Doe'
});

Tony.address2 = {
    street: '333 Second St.'
}