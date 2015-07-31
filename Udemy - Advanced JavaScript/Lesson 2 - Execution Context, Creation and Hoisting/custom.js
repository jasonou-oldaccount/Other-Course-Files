// Hoisting - Sets up memory space for variables/functions first
// Execution Context is Created in two phases (creation phase)
b();
// All variables are initially set as undefined when given memory space
console.log(a);

// Anything not inside a function is a global object

// Can be called with window.a or a in console
var a = 'Hello World!';

// Can be called with windowb or b in console
function b() {
    console.log('Called function b()!');
}

// try to avoid hoisting
b();
console.log(a);