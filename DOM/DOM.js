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

// ------------------- CREATE ELEMENT -----------------------

const elementCreation = document.createElement("divider");

const p = document.createElement("p");

/**
 * ABSOLUTE SPAGHETTI CODE IGNORE!!!!!! I WAS JUST FUCKING AROUND
 */

container.append(p);

container.style.color = "blue";
container.style.backgroundColor = "blue";

container.appendChild(elementCreation);

console.log(container.childNodes);

elementCreation.style.color = "blue";

elementCreation.style.cssText = "color: blue; background: white;";

// OR elementCreation.setAttribute("style", "color: blue; background: white;");

