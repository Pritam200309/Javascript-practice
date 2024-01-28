// array.reduce() = reduces an aray to a single value

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// total:	Required.
//       The initialValue, or the previously returned value of the function.

// currentValue:	Required.
//               The value of the current element.

// currentIndex:	Optional.
//               The index of the current element.

// arr:	Optional.
//     The array the current element belongs to.

// initialValue:	Optional.
//               A value to be passed to the function as the initial value.


let prices = [5, 10, 15, 20, 25, 30];
let total = prices.reduce(checkOut);

console.log(`The total is: $${total}`);

function checkOut(total, element) {
  return total + element;
}
