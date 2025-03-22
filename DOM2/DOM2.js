const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious evolution!";

container.appendChild(content);

let p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";

container.appendChild(p);

let h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);


let div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "black";

let h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

let p2 = document.createElement("p");
p2.textContent = "ME TOO!";

div.append(h1);
div.append(p2);


container.appendChild(div);

