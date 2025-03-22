const container = document.querySelector("#container");

const displayContainer = container.firstElementChild;
console.log(displayContainer); // RETURNS <div class="display"></div>

console.log("-----------");

const controls = document.querySelector(".controls");

const displayControls = controls.previousElementSibling;
console.log(displayControls); // RETURNS <div class="display"></div>

console.log("-----------");

const displays = document.querySelector(".display");

const displayDisplay = displays.previousElementSibling;
console.log(displayDisplay); // RETURNS NULL


const displayAll = document.querySelectorAll("#container");

const displayAllNodes = Array.from(displayAll);
console.log(displayAllNodes);
