// Returns 2
function a() {
    function b() {
        console.log(myVar);
    }
    
    var myVar = 2;
    b();
}

var myVar = 1;
a();

/* Returns 1
function a() {    
    var myVar = 2;
    b();
}

function b() {
    console.log(myVar);
}

var myVar = 1;
a();
*/