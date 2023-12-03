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
*/

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
