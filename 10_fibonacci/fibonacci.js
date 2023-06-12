const fibonacci = function(x) {
    
    x = +x; // partse as int
    
    if (x < 0)
        return "OOPS";
    
    if (x < 1)
        return 0;
    if (x === 1)
        return 1;
    if (x > 1)
        return fibonacci(x - 1) + fibonacci(x - 2);

};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
