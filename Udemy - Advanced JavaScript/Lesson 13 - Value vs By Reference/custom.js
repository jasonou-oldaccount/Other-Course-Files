// By Value (primitives)
var a = 3;
var b;

b = a;

a = 2;

console.log(a);
console.log(b);

// By Reference (All Objects (including functions))

var c = { greeting: 'Hi' };
var d;

d = c;

c.greeting = 'Hello'; // Mutate

console.log(c.greeting);
console.log(d.greeting);

// By Reference (even as parameters)

function changeGreeting(obj) {
    obj.greeting = 'Hola'; // Mutate
}

changeGreeting(d);
console.log(c.greeting);
console.log(d.greeting);

// Equals Operator sets up new memory space (new address)

c = { greeting: 'Howdy' };
console.log(c.greeting);
console.log(d.greeting);