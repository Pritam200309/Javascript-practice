// static = belongs to the class, not the objects
// propeeties : useful for caches, fixed-configuration
// methods : useful for utility functions

class car {
  static numberofCars = 0;

  constructor(model) {
    this.model = model;
    car.numberofCars += 1;
  }

  static startRace() {
    console.log("3...2...1...GO!");
  }
}

const car1 = new car("Mustang");
const car2 = new car("Corvette");
const car3 = new car("BMW");
const car4 = new car("Ferrari");

console.log(car.numberofCars);

car.startRace();
