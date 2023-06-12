const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
  return x - y;	
};

const sum = function(x) {
  const sumArray = x.reduce( (acc, item) => {
    return acc + item;
  }, 0);	

  return sumArray;
};

const multiply = function(x) {

  const productArray = x.reduce( (accumulate, arg) => {
    return accumulate * arg;
  }, 1);

  return productArray;

};

const power = function(x, y) {

  return x**y;
};

const factorial = function(x) {

  if (x === 0) return 1;
  
  let fact = x;
	for (let i = 1; i < x; ++i)
  {
    fact *= i;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
