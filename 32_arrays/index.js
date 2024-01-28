// array = think of it as a variable
// that can store multiple values

let fruits = ["apple", "orange", "banana"];

// fruits[2] = "coconut";

fruits.push("lemon"); // add an element
fruits.pop(); // removes last element
fruits.unshift("mango"); // add element to begining
fruits.shift(); // removes element from begining

let length = fruits.length;
let index = fruits.indexOf("kiwi");

console.log(index);

/* ------------------------------------------------------------ */

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));