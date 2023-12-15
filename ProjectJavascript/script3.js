const jatin = [
 'Jatinder',
 'Singh',
 '1979',
 'Male',
 'Delhi',
 'Bangalore',
 ['Maria', 'Viraj', 'Dhruv']
];

// for (let i = jatin.length - 1; i>=0; i--){
//     console.log(i, jatin[i]);
// }

// for (let rep = 1; rep <=10; rep++){
//     console.log(`lifting weight repetition ${rep} 🏋️`);
// }

// let rep = 1;
// while (rep <=10 ){
//     console.log(`lifting weight repetition ${rep} 🏋️`);
//     rep++;
// }

// let diceRoll = Math.trunc (Math.random() * 6 ) + 1;
// // console.log(diceRoll);

// while (diceRoll !== 6){
//     console.log(`You rolled a dice, the number is ${diceRoll}`);
//     diceRoll = Math.trunc (Math.random() * 6 ) + 1;
//     if(diceRoll === 6)console.log(`We have a winner you got ${diceRoll} 🥇`);
// }


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    const total = bills[i] + tip;
    tips.push(tip);
    totals.push(total);
    console.log(`The bill amount is ${bills[i]}, including the tip amount ${tip}, your total is ${total}`);
}

console.log("Tips:", tips);
console.log("Totals:", totals);

const calcAverage = function (brr){
    let sum = 0;
    for (let i = 0 ; i < brr.length; i++){
        sum += brr[i];
    }
    return sum / brr.length;
}
console.log (calcAverage([2, 3 , 4]));
console.log (calcAverage(totals));
console.log (calcAverage(tips));