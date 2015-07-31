function greet(whattosay) {
    
    return function(name) {
        console.log(whattosay + ' ' + name);
    };
    
};

var sayHi = greet('Hi');

sayHi('Tony');

function buildFunctions() {
    
    var arr = [];
    
    for(var i = 0; i < 3; ++i) {
        arr.push(
            (function(j) {
                return (function() { console.log(j) });
            }(i))
        );
    };
    
    return arr;
};

var fs = buildFunctions();


fs[0]();
fs[1]();
fs[2]();