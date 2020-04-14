'use strict';

// pure function - no side effects
function add(a, b) {
  return a + b;
}

// impure function - console.log is a side effect of this function
function multiply(a, b) {
  console.log('result', a + b); // side effect
  return a * b;
}

// mutable
let arr = [1, 2, 3, 4, 5];

// value of arr is = [1, 2, 3, 4, 5];

arr.pop();

// value of arr is [1, 2, 3, 4];

// array methods like map, filter, and reduce -> immutable methods

let numbers = [2, 3, 4, 5];

function pureSquares([...nums]) {
  for (var i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }

  return nums;
}


function impureSquares(nums) {
  for (var i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }

  return nums;
}

impureSquares(numbers);

let kids = ['riley', 'reid']; // remains the same
let moreKids = [...kids, 'rosalie']; // creates a copy and adds a person to the copy


// higher order function
// is a function that returns a function
function sayHello(person) {
  return function() {
    console.log('hello', person);
  }
}