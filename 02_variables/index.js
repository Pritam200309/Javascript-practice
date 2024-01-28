// A variable is a container for storing data
// A variable behaves as if it was the value tahat it contains

// Two steps
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let firstname = "Bro"; // strings
let age = 21; // numbers
let student = false; // booleans

console.log("Hello", firstname);
console.log("You are", age, "years old");
console.log("Enrolled", student);

document.getElementById("p1").innerHTML = "Hello " + firstname;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student