// const favourite = Number(prompt("what your name?"));

// console.log(typeof favourite);
// if (favourite === 23) console.log("I am convertable");
const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("YES TODAY IS MONDAY");
// }

var bill = 430;
var tipOne = 0.15;
var tipTwo = 0.2;
var tip = bill >= 50 && bill <= 300 ? bill * tipOne : bill * tipTwo;

console.log(tip);
console.log(bill, tip, (total = bill + tip));
