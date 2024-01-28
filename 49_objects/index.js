// onject = A group o properties and methods
// properties = what an object has
// methods = what an object can do
// use . to access properties/methods

const car = {
  model: "Mustang",
  color: "red",
  year: 1969,

  drive: function () {
    console.log("You driving the car");
  },
  brake: function () {
    console.log("You step on the break");
  },
};

console.log(car.model);
console.log(car.color);
console.log(car.year);

car.drive();
car.brake();
