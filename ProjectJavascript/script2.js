'use strict';

function myName() {
console.log("My name is Jatin")
}
myName();

function myBody (name, age, height){
const detials = console.log (`My name is ${name}, my age is ${age} and my height is ${height}`);
return detials;
}
myBody('Jatin', 44, 6);
myBody('Viraj', 12, 4);
myBody('Dhruv', 10, 4.2);

function square(num) {
    const result = num * num;
    return result;
}

const result = square(4);
console.log(result);
console.log(`the square of 4 * 4 is ${square(  4 )}`);

function areaOfCircle(radius){
    const area = 3.14*(radius*radius);
    return area;
}
const radius = 10;
const circleArea = areaOfCircle(radius);
console.log(`The radius is ${radius}, the area of circle is ${circleArea}`);

//Function to convert celcius to fahrenheit

//declare a function tempConverter
//function will take one input value, in this case we will consider it as celcius
//In the function we will perform the operations
    // (0°C × 9/5) + 32 = 32°F
    // celcius * 9/5 + 32 = answer
    //return 

//out of the function 
//declare a variable to enter the value
//console.log ()

// function tempConverter(celcius){
//     const temp = (celcius*(9/5)) +32
//     return temp;
// }

// const temperature = 30;
// console.log(`The celcius temperature is ${temperature}, and the Fahremheit temperature is ${tempConverter(temperature)}`);

// function tempConverter(celsius){
//     const fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// }

// const celsiusTemp = 30;
// const fahrenheitTemp = tempConverter(celsiusTemp);

// console.log(`The celsius temperature is ${celsiusTemp}, and the fahrenheit temperature is ${fahrenheitTemp}`);

//Function to check if number is even or odd
/*
function evenOdd(number){
    const checkNumber = number % 2;
        if (checkNumber === 0){
            return "Even Number"
        }else{
           return "Odd Number"
        }  
}
const number = 11;
const theResult = evenOdd(number);
console.log(`The number entered is ${number}, and it is a ${theResult}`);
*/

const calculateRectangleArea = function (length, width) {
    return length * width;
};

const calculateArea = function () {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);

    if (isNaN(length) || isNaN(width)) {
        document.getElementById("result").textContent = "Please enter valid numeric values.";
    } else {
        const area = calculateRectangleArea(length, width);
        document.getElementById("result").textContent = `The area of the rectangle is ${area} square units.`;
    }
};

const resetForm = function () {
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("result").textContent = "";
};

// Arrow function to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Calculate average scores for Dolphins and Koalas using the test data
const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

// Function to check the winner and log the result
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
};

// Test Data 1
console.log("Test Data 1:");
checkWinner(scoreDolphins1, scoreKoalas1);

// Test Data 2
console.log("\nTest Data 2:");
checkWinner(scoreDolphins2, scoreKoalas2);

/********Objects**********/

// Method 1  = Object leteral Syntax

const teamMember_1 = { // The OBJECT of teamMember_1 has 5 properites
    firstName: "Sam",  // property 1
    lastName:  "Richard", // property 2
    age:  2023 - 1979, // property 3
    job:  "Consultant", // property 4
    friends: ['Maria', 'Viraj', 'Dhruv'] // property 5
};
console.log(teamMember_1);

// Retreive data from object and how to change data in objects using DOT and Bracket notation

const fresher = {
  name: "John Doe",
  employeeId: "F001",
  team: "Development",
  performance: 50,
  coachingHours: 0,
  metrics: {
    tasksCompleted: 10,
    bugsFixed: 2,
    codeQuality: 3,
  },
  joinCompany: function (companyName) {
    console.log(`${this.name} has joined ${companyName}.`);
  },
};

// Team Leader object
const teamLeader = {
  name: "Alice Smith",
  employeeId: "TL001",
  team: "Development",
  coachingHours: 0,
  coachTeamMember: function (fresher, hours) {
    fresher.coachingHours += hours;
    fresher.performance += hours * 2; // Performance increases with coaching hours
    console.log(
      `${this.name} coached ${fresher.name} for ${hours} hours. ${fresher.name}'s performance increased to ${fresher.performance}.`
    );
  },
};

fresher.joinCompany("ABC Inc.");

teamLeader.coachTeamMember(fresher, 3);
teamLeader.coachTeamMember(fresher, 2);

console.log(`${fresher.name}'s coaching hours: ${fresher.coachingHours}`);
console.log(`${fresher.name}'s performance: ${fresher.performance}`);

// Sample data for house tiles
const housesData = [
    { name: "House A", location: "City A", address: "123 Main St", rate: 1200 },
    { name: "House B", location: "City B", address: "456 Elm St", rate: 1500 },
    // Add more house objects as needed
];

const houseList = document.getElementById("houseList");
const addHouseBtn = document.getElementById("addHouseBtn");

// Function to add a new house tile
function addHouseTile(house) {
    const houseTile = document.createElement("div");
    houseTile.classList.add("house-tile");
    houseTile.innerHTML = `
        <h3>${house.name}</h3>
        <p><strong>Location:</strong> ${house.location}</p>
        <p><strong>Address:</strong> ${house.address}</p>
        <p><strong>Rate for Rent:</strong> $${house.rate}</p>
    `;
    houseList.appendChild(houseTile);
}

// Initial rendering of house tiles
housesData.forEach((house) => {
    addHouseTile(house);
});

// Event listener for adding a new house
addHouseBtn.addEventListener("click", () => {
    const houseName = document.getElementById("houseName").value;
    const location = document.getElementById("location").value;
    const address = document.getElementById("address").value;
    const rate = document.getElementById("rate").value;

    if (houseName && location && address && rate) {
        const newHouse = { name: houseName, location, address, rate: parseFloat(rate) };
        addHouseTile(newHouse);

        // Clear input fields
        document.getElementById("houseName").value = "";
        document.getElementById("location").value = "";
        document.getElementById("address").value = "";
        document.getElementById("rate").value = "";
    } else {
        alert("Please fill in all fields.");
    }
});

const years =[1979, 2007, 1969, 2020];
const ages= [];
// for (let i = 0; i <= 10; i++){
//     console.log(`I am ${i} my number is ${i}`);
// }
for (let i = 0; i < years.length; i++){
    
    ages.push (2023 - years [i]);
}
console.log(ages);


