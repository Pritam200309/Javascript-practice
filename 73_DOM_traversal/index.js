// let element = document.body;
// let child = element.lastElementChild;
// console.log(child);
// child.style.backgroundColor = "lightgreen";

// let element = document.querySelector("#vegetables");
// let parent = element.parentElement;
// console.log(parent);
// parent.style.backgroundColor = "lightgreen";

// let element = document.querySelector("#vegetables");
// let sibling = element.previousElementSibling;
// console.log(sibling);
// sibling.style.backgroundColor = "lightgreen";

// let element = document.querySelector("#fruit");
// let child = element.firstElementChild;
// child.style.backgroundColor = "lightgreen";

let element = document.querySelector("#fruit");
let children = Array.from(element.children);

children.forEach((child) => (child.style.backgroundColor = "lightgreen"));

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)
