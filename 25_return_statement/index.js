// return = returns a value back to the place
// where you invoked a function

let area;
let width = window.prompt("Enter width");
let height = window.prompt("Enter height");

area = getArea(width, height);

console.log("The area is:", area);

function getArea(width, height) {
  return width * height;
}
