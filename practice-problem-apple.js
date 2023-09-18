let money = 1000;
let applePrice = 300;
let orrengePrice = 400;


let totalExpence = applePrice + orrengePrice;

let totalRemaining = money - totalExpence;

console.log(totalExpence);
console.log(totalRemaining);



// problem 2

let mathematics = 75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bangla = 99.50;

let totalMarks = mathematics + biology + chemistry + physics + bangla;
console.log(totalMarks);

let averageMarks = totalMarks / 5;

let averageMark2decimal = averageMarks.toFixed(2)
let numAverageMarks = parseFloat(averageMark2decimal)

console.log(numAverageMarks);

// problem 4

let givenNumber = 119;

let totalRemainderNumber = givenNumber % 5;
console.log(totalRemainderNumber);

// problem 5

let fristLine = "I am going to be";
let secondLine = "an awesome web developer";

let oneSentenceLine = fristLine + " " + secondLine + " ";

let concatLine = oneSentenceLine.concat("very impressinve")

console.log(concatLine);

console.log(oneSentenceLine);