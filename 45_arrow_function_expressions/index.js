// arrow function = compact alternative to a traditional function expressions
// =>

// const greetings = (userName) => console.log(`Hello $${userName}`);
// greetings("pritam");

// const percent = (x, y) => (x / y) * 100;
// console.log(`${percent(45, 50)}%`);

let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));
