// arra.forEach() = executes a provided callback funvction
//once for each array element

// array.forEach(function(currentValue, index, arr), thisValue)

// function():	Required.
//             A function to run for each array element.

// currentValue:	Required.
//               The value of the current element.

// index:	Optional.
//       The index of the current element.

// arr:	Optional.
//     The array of the current element.

// thisValue:	Optional. Default undefined.
//           A value passed to the function as its this value.

let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
  console.log(element);
}
