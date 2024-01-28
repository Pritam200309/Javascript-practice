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

/* -------------------------------------------------- */

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Pritam",
    "full name": "Pritam Bro",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "pritam@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "pritam@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());