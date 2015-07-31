greet();

function greet() {
    console.log('Hi');
}

var anonymousGreet = function() {
    console.log('Hi');
}

anonymousGreet();

function log(a) {
    a();
}

log(function() {
    console.log('Hi');
});