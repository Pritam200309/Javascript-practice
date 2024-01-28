// promises = object that encapsulates the result of an asynchronus operation
// let asynchronousmethods return values like synchronus methods
// "I promise to return smething in the future"

// the state is 'pending' the: 'fulfilled' or 'rejected'
// the RESULT is what can be returned
// 2 parts producing & consuming

// const promise = new Promise((resolve, reject) => {
//   let fileLoded = false;

//   if (fileLoded) {
//     resolve("File loaded");
//   } else {
//     reject("File not loaded");
//   }
// });

// promise
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

wait(300).then(() => console.log("Thanks for waiting!"));
