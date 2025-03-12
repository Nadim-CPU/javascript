console.log('Fruits, Fruits, Fruits');

const fruits = ["Banana", "Apple", "Orange", "Pear", "Cherry"];

let fruitLength = fruits.length;

for (let i = 0; i < fruitLength; i++){
    console.log(fruits[i]);
}

console.log('Lets remove the Orange...');

let isOrange = false;
let identifiedIndex;
for (let i = 0; i < fruitLength; i++) {
    if (fruits[i] === "Orange") {
        isOrange = true;
        identifiedIndex = i;
    }
}

isOrangeFound(isOrange, identifiedIndex);

for (let i = 0; i < fruitLength; i++) {
    console.log(fruits[i]);
}

function isOrangeFound(isOrange, identifiedIndex) {
   if (isOrange) {
        console.log(`Fruit Orange has been found at Index ${identifiedIndex}!`);
        console.log(`Removing Orange....`);
        removeOrange(identifiedIndex);
        console.log(`Orange Removed!`);
    } else {
       ocnsole.log(`Fruit Orange has not been found!`)
    }
}

function removeOrange(identifiedIndex) {
    delete fruits[identifiedIndex];
    for (let i = identifiedIndex; i < fruitLength; i++) {
        if (i + 1 <= fruitLength) fruits[i] = fruits[i + 1];
    }
    fruitLength--;
}

