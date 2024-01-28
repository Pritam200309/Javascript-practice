// function expressions = function without a name (anonymous function)
// avoid polluting the global scope with names
// Write it, then forget about it

// const greeting = function(){
//     console.log("Hello!");
// }

// greeting();

let count = 0;

function increaseCount() {
  count += 1;
  document.getElementById("myLabel").innerHTML = count;
}
function decreaseCount() {
  count -= 1;
  document.getElementById("myLabel").innerHTML = count;
}
