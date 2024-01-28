// ! NOT logical operator
// typically used to reverse a conditions's boolean value
// true -> false flase -> true

let temp = 15;
let sunny = true;

if (!(temp > 0)) {
  console.log("IT's cold outside");
} else {
  console.log("It's warm outside");
}

if (!sunny) {
  console.log("It's clouy outside");
} else {
  console.log("It's sunny outside");
}
