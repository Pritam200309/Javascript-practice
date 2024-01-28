// function = Define code once, and use it many times
// To perform some code, call the funstion name

startProgram();

function startProgram() {
  let userName = "Bro";
  let age = 19;

  happyBirthday(userName, age);
}

function happyBirthday(userName, age) {
  console.log("Happy bityhday to you");
  console.log("Happy bityhday to you");
  console.log("Happy birthday dear", userName);
  console.log("Happy bityhday to you");
  console.log("You are", age, "years old");
}
