// slice() extraxts a section of a string
// and returns it as a new String,
// without modifying the original string

let fullName = "Pritam Kharait";
let firstName;
let lastName;

// firstName = fullName.slice(0, 6);
// lastName = fullName.slice(7);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
