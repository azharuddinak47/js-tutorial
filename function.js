// store some work in a function
function sayHello() {
  console.log("Hello World");
}

sayHello(); // fuction call
sayHello(); // fuction call
sayHello(); // fuction call
sayHello(); // fuction call

// console.log("Hello World");


function addNumbers(num1, num2) { //function with parameters
  console.log(num1 + num2);
}
addNumbers(10, 20); // function call with arguments



function multiplyNumbers(num1, num2) {
   return num1 * num2 // return the result
}

let result = multiplyNumbers(5, 4);
console.log(result); // print the result
