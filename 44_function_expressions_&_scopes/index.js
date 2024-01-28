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


/* ------------------------------------------------------------- */

// if (true) {
//   const username = "hitesh"
//   if (username === "hitesh") {
//       const website = " youtube"
//       console.log(username + website); --> Gives error 1st
//   }
//   console.log(website); --> Gives error 2nd
// }

// console.log(username); --> Gives error 3rd

// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }



// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }