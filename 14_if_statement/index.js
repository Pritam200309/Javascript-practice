// if statement = a absic form of decision amking
// if a condition is true, then do something
// if not then don't do it

// let age = 65;

// if (age >= 18) {
//   console.log("You are an adult!");
// } else if (age < 0) {
//   console.log("YOU HAVEN'T BORN YET!");
// } else if (age >= 65) {
//   console.log("You are a senior citizen!");
// } else {
//   console.log("You are a child");
// }

let online = true;

if (online) {
  console.log("You are online");
} else {
  console.log("You are offline");
}


/* ------------------------------------------------------------- */

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")