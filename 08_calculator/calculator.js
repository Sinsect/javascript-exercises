const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  let sum = 0;
	nums.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function(nums) {
  let total = 1;
	nums.forEach(num => {
    total *= num;
  });
  return total;
};

const power = function(num, pow) {
  let result = 1;
	for (i = 0; i < pow; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
  let total = 1;
	for (i = 2; i <= num; i++) {
    console.log('loop run ' + i + ' times');
    total *= i;
  }
  return total;
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
