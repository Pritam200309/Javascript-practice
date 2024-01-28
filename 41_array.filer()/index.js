// array.filter() = creates a new array with all elements
// that pass the test provided by a function

let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(chceckAge);

adults.foreach(print);

function chceckAge(element) {
  return element >= 18;
}

function print(element) {
  console.log(element);
}
