// arrow function = compact alternative to a traditional function expressions
// =>

// const greetings = (userName) => console.log(`Hello $${userName}`);
// greetings("pritam");

// const percent = (x, y) => (x / y) * 100;
// console.log(`${percent(45, 50)}%`);

let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));

/* ------------------------------------------------------ */

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)



// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
