//This is a comment
/*
let myName = "Jatin";
console.log(myName);

const age ="45";
const myName ="Jatinder";
console.log ("My age is " + age + " My name is " + myName);

function testScope (){
let carName = "Jeep";
const carModel = "Dynamic Model";

console.log (carName);
console.log (carModel);
}

testScope();

var mySport = "Cricket";
console.log(mySport);

let myPet = "Cat";
console.log(myPet);

const mySalary = "1 Billion";
console.log (mySalary);

//Math Operators
const now = 2023
const ageJatin = now -1979;
const ageViraj = now - 2011;
console.log(ageJatin, ageViraj);

const firstName = "Jatin";
const lastName = "Singh";
console.log(firstName + " " + lastName);

//assignment Operator
let x = 10 + 5; //15
x += 10; // x = x + 15 , which is x = 15 + 10
x *= 4; // x = x * 4, which is 25 * 4 = 100
x++; // x = x + 1
x--;
console.log(x);

console.log(ageJatin > ageViraj);
console.log(ageViraj > ageJatin);

const ageCriteria = 18;
console.log("age criteria check " + (ageJatin >= ageCriteria));
console.log("age criteria check "  + (ageViraj >= ageCriteria));

const firstName = "Jatin";
const myJob = "Web Developer";
const birthYear ="1979";
const currentYear = "2023";

const myIntro = "I am " + firstName + ", I am a " + myJob + " I was born in year " + birthYear + "." + "I am " + (currentYear - birthYear) + " years old, and learning to be a great " + myJob + ".";

console.log (myIntro);

//Template strings , look at the backtic at the start and end of the expression.
const myNewIntro = `I am ${firstName}, I am a ${myJob}. I was born in year ${birthYear}. I am ${(currentYear-birthYear)} years old and learning to be a great web developer.`;
console.log(myNewIntro);

//Use of backtics
const myBoy = `Viraj`;
console.log(`This is a string, Name of my elder one is ${myBoy}`);

//Use of \n\ to create a new line
console.log ("This is a string and when I add the sign \\n\\ it will create the next line \n\
with multiple \n\
lines.");

//Use of backtic to create multiline string
console.log(`With the use if backticks, all in need to do is
just enter and move to
next line.
This is also called as template literal.
`);


// A program to check if eligible for driving using if else control stucture.
const myName = "Jatinder";
const yearOfBirth = 2012;
const currentYear = 2023;
const ageForDrivingLicense = 18;
const areYouEligible = (currentYear - yearOfBirth);
if (areYouEligible >= ageForDrivingLicense){
    console.log("Congrats " + myName + "!! " + "You can drive. Drive safe.");
}else{
    console.log("Sorry " + myName + ", you need to wait for another " + (ageForDrivingLicense-areYouEligible) + " years.");
    console.log(`Sorry ${myName}, you are not eligible to drive for now, you need to wait ${ageForDrivingLicense-areYouEligible} years.`);
};

const birthYear = 2021;

let century;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21
};
console.log(century);


// Basic Comparison

const num1 = 10;
const num2 = 20;

if(num1>num2){
    console.log(`Number 1 is greater than number 2, Number 1 is ${num1} and Number 2 is ${num2}`);
}else{
    console.log(`Number 2 is greater than number 1, Number 1 is ${num1} and Number 2 is ${num2}`);
};


function isEven(number) {
    return number % 2 === 0;
}

function checkNumbers(num1, num2) {
    let result1 = isEven(num1) ? "even" : "odd";
    let result2 = isEven(num2) ? "even" : "odd";

    console.log(`The first number is ${num1} and it is ${result1}`);
    console.log(`The second number is ${num2} and it is ${result2}`);
}

// Getting user input
const userInput1 = prompt("Enter the first number:");
const userInput2 = prompt("Enter the second number:");

// Converting input to numbers
const num1 = Number(userInput1);
const num2 = Number(userInput2);

// Validate input
if (!isNaN(num1) && !isNaN(num2)) {
    checkNumbers(num1, num2);
} else {
    console.log("Invalid input. Please enter numeric values.");
}



const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
*/

/* Write your code below. Good luck! 🙂 */

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if(BMIJohn > BMIMark){
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);

}else{
    console.log (`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
};


//Type Conversion and Coercion
//Truthy and Falsy Values
//5 falsy vaues - 0, '', undefined, null, NaN and false
// Equality operators
// Boolean Operators - Logical Operators

const totalMatches = 3;
const teamDolphinesScores = [96,108,89];
const teamKoalasScores = [88,91,110];

let scoreSumDolphines = 0;
for(let i=0; i<teamDolphinesScores.length;i++){
    scoreSumDolphines += teamDolphinesScores[i];
};

let scoreSumKoalas = 0;
for(let i=0; i<teamKoalasScores.length;i++){
    scoreSumKoalas += teamKoalasScores[i];
};

const averageScoreDolphines = scoreSumDolphines/totalMatches;
console.log(`The score os Dolphinesis: ${averageScoreDolphines}`);

const averageScoreKoalas = scoreSumKoalas/totalMatches;
console.log(`The score of Koalas: ${averageScoreKoalas}`);

if(averageScoreDolphines > averageScoreKoalas) {
    console.log(`Dolphins win the trophy`);
}else if(averageScoreKoalas > averageScoreDolphines ){
    console.log(`Koalas win the trophy`);
}else{
    console.log(`Both win the trophy`);
};


/****************Switch Statements **************/

/*
const day = 'Monday';

switch(day){
    case 'Monday':
        console.log("Coffee");
        console.log ("Monday Coffee");
        break;
    case 'Tuesday':
        console.log("Tuesday Coffee");
    case 'Wednesday':
        console.log("Wednesday Coffee");
    default:
        console.log("No Coffee Day!");
}


let day = 'Saturday';

if (day === 'Monday') {
    console.log("Monday Coffee");
} else if(day === 'Tuesday') {
    console.log("Tuesday Coffee")
}else if(day === 'Wedneday' || day === 'Thursday'){
    console.log("Two days of coffee - Wednesday and Thursday")
}else if(day === 'Friday'){
    console.log("Today no coffee, let us have beer");
}else if(day === 'Saturday' || day === 'Sunday'){
    console.log("This is a weekend !")
}else{
    console.log("You are not on earth!")
};

*/

/*********Conditional Statement ***********/
/*
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% 
if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:
Calculate the tip, depending on the bill value. Create a variable called tip for this. 
It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, 
and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

/***Ternary operator ****/

// const age = 18;
// const final = age >= 18 ? "Can drin wine": "Can drink water";
// console.log(final);

/*
const billAmount = 275;
const tip = billAmount >=50 && billAmount <=300 ? (billAmount/100)*15 : (billAmount/100)*20;
const finalBill = billAmount + tip;
console.log(`The bill was ${billAmount}, the tip was ${tip}, and the final value is ${finalBill} `)
*/