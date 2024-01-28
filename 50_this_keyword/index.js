// this = reference to a particular object
// the object depends on the immediate context

// const car1 = {
//   model: "Mustang",
//   color: "red",
//   year: 1969,

//   drive: function () {
//     console.log(`You driving the ${this.model}`);
//   },
// };

// const car2 = {
//   model: "Corvette",
//   color: "blue",
//   year: 2003,

//   drive: function () {
//     console.log(`You driving the ${this.model}`);
//   },
// };

// car1.drive();
// car2.drive();

this.name = "myCoolWindow";
console.log(this.name);

/* ----------------------------------------- */

// hello()

// const hello = function () {
//     let username = "pritam"
//     console.log(this.username);
// }

// const hello =  () => {
//     let username = "pritam"
//     console.log(this);
// }

