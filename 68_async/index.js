// async = makes a function return a Promise
// await = makes a function wait for a Promise

async function loadFile() {
  let fileLoded = true;
  if (fileLoded) {
    return("File loaded");
  } else {
    throw "File not loaded";
  }
}

loadFile()
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// async function loadFile() {
//   let fileLoded = false;
//   if (fileLoded) {
//     return Promise.resolve("File loaded");
//   } else {
//     return Promise.resolve("File not loaded");
//   }
// }

// promise
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));
