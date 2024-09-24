// Mathematical and Comparison Operations, and Type Conversions

//initial variables
let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e = 15;

//a.sum of the declared variables
let sumOfAll =(25 + 20 + 12 + "15" + 15);
console.log(sumOfAll);

//b.comparing the values of variable d and const e
console.log("15" > 15);
console.log("15" < 15);
console.log("15" >= 15);
console.log("15" <= 15);
console.log("15" === 15);

//c.1 subtract values
let subVar = (a - b - c - d - e);

//c.2 multiply values of a and c
let mulVar = ((a * c )/ e);

//c.3 exponent of const e to the power of var c
let exOfE = (e ** c);

//print the outputs
console.log(subVar);
console.log(mulVar);
console.log(exOfE);

//reassign value of c.3
let reExOfE = exOfE;
reExOfE = e;

//print output
console.log(reExOfE);
