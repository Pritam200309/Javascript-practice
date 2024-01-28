// while loop = repeat some code
// while some condition is true
// potentially infinite

let username = "";

while (username == "" || username == null) {
  username = window.prompt("Enter your name");
}

console.log("Hello ", username);
