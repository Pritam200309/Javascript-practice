// variable scope = where a variable is acessible

//let = variable are limite to lock scope
// var = variable are limited to a function

// global variable = is declared outside any functon
// (if global, var will CHANGE browser's window property)

// let name = "Bro";
var name = "Bro";

doSomething();

function doSomething() {
  for (var i = 1; i <= 3; i += 1) {
    // console.log(i);
  }
}

console.log(i);
