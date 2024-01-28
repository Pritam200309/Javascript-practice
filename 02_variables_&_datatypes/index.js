// A variable is a container for storing data
// A variable behaves as if it was the value tahat it contains

// Two steps
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


let firstname = "Bro"; // strings
let age = 21; // numbers
let student = false; // booleans

console.log("Hello", firstname);
console.log("You are", age, "years old");
console.log("Enrolled", student);
console.table({ firstname, age, student });

document.getElementById("p1").innerHTML = "Hello " + firstname;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student



//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const name = "Pritam";
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
const anotherName = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "pritam",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


// https://262.ecma-international.org/5.1/#sec-11.4.3