var ObjectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
};

console.log(JSON.stringify(ObjectLiteral));

var jsonValue = JSON.parse('{"firstname": "Mary","isAProgrammer": true}');

console.log(jsonValue);