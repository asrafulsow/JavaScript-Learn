let emotion;

for (let emotion = 0; emotion <= 200; emotion++) {
    console.log("I Love You" + " " + emotion);
}

let givenRost;

for (let givenRost = 0; givenRost < 10; givenRost++) {
    console.log("Chiken Rost pailam" + " " + givenRost);
}

// find the event number in for loop

let number;

for (number = 1; number < 20; number++) {
    number += 1;
    console.log(number);
}

// find the odd number in foor loop

let items = ["book", "Laptop", "mouse", "table", "hairphone", "Keyboard"]

for (let i = 0; i < items.length; i++) {
    // console.log(i);
    let item = items[i]
    if (item === "table") {
        break;
    }

    console.log(item);
}

let num = [10, 50, 80, 112, 40, 19, 30, 55, 12];

for (let i = 0; i < num.length; i++) {
    let number = num[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
}

//  find the even number in javaScript

let evenNumber;

for (let evenNumber = 1; evenNumber < 100; evenNumber++) {
    evenNumber = evenNumber + 1;
    console.log(evenNumber);
}