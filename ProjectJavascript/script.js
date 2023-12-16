"use strict";

// function helloWorld() {
//   console.log("Hi World, I am a message from the fucntion");
// }

// helloWorld();

// const x = 10;
// if (x === 10) console.log(10);
// console.log("Hello World !!!");
// console.log("This is a server feed");
// console.log("Coming strainght from the local server");

function logTemperatures(teperature) {
  const numberOfDays = [];

  for (let i = 0; i < teperature.length; i++) {
    const day = i + 1; //Start the day count from 1
    numberOfDays.push(day);
  }

  for (let i = 0; i < teperature.length; i++) {
    console.log(
      `The temperature on day ${numberOfDays[i]} is ${teperature[i]}°C.`
    );
  }
}

const teperatureData = [25, -10, 23, 45, 34, -10];
logTemperatures(teperatureData);
