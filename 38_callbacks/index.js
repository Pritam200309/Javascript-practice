// callback = a function passed as an argument
// in another function

// Ensure a function is not going
// to run before a tsk is comleted.
// Helps us develop asynchronus code.
// (When one function has to wait for another function)
// that helps us avoid errors and potential problems
// EX. Wait for file to load

sum(2, 3, displayDOM);

function sum(x, y, callback) {
  let result = x + y;
  callback(result);
}

function displayConsole(output) {
  console.log(output);
}

function displayDOM(output) {
  document.getElementById("myLabel").innerHTML = output;
}
