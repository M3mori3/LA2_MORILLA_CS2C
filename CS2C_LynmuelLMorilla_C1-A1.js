// Variable/Constants Declaration and String Concatenation Methods

//Persona 1
let fName1 = "Mark Vincent";
let mName1 = "Gaoat";
let lName1 = "Ricarde";
let bDate1 = "February 8, 2005 ";
let bPlace1 = "Brgy. Butol, Santiago, Philippines, 2707 ";
let addr1 = bPlace1;
let courseYr1 = "Bachelor of Science in Computer Science";
let djob1 = "Motor Tuner"; 

let fullName1 = fName1 +" "+ mName1+ " "+ lName1;
let upFullName1 = fullName1.toUpperCase();

//splitting sentences
let fsentence1 = upFullName1 + " was born in " + bDate1 + " at " + bPlace1.toUpperCase() + "and is currently living there. ";
let sSentence1 = fullName1 + " is taking up " + courseYr1 + " and dreams to be a " + djob1 + " after graduation. ";

//printing all sentences
console.log(fsentence1+sSentence1);
console.log(" ");

//1stclassmate's information
let fName2 = "Mark Jasson";
let mName2 = "Egos";
let lName2 = "Dapon";
let bDate2 = "April 18, 2005";
let bPlace2 = "Brgy. Tablac, Candon City, Philippines, 2710 " ;
let addr2 = bPlace2 ;
let courseYr2 = "Bachelor of Science in Computer Science";
let djob2 = "Game Developer";

let fullName2 = fName2 +" "+ mName2+ " "+ lName2;
let upFullName2 = fullName2.toUpperCase();

//splitting sentences
let fsentence2 = "His classmate " + upFullName2 + ", was born in " + bDate2 + " at " + bPlace2.toUpperCase() + "and has been living there ever since. ";
let sSentence2 = fullName2 + " is taking up " + courseYr2 + " and wants to become a " + djob2 + " after graduation. ";

//printing 1stclassmate's information
console.log(fsentence2 + sSentence2);
console.log(" ");

// 2ndclassmate information
let fName3 = "Lynmuel";
let mName3 = "Lucero";
let lName3 = "Morilla";
let bDate3 = "March 30, 2005";
let bPlace3 = "Brgy. Nagkaisang Nayon, Quezon City, Philippines, 1123 " ;
let addr3 = "Brgy. Villa Garcia, Sta. Cruz, Philippines, 2713";
let courseYr3 = "Bachelor of Science in Computer Science";
let djob3 = "Game Developer";

let fullName3 = fName3 +" "+ mName3+ " "+ lName3;
let upFullName3 = fullName3.toUpperCase();

//splitting sentences
let fsentence3 = "Their other classmate " + upFullName3 + ", was born in " + bDate3 + " at " + bPlace3.toUpperCase() + " and is now living in " + addr3.toUpperCase() + ". ";
let sSentence3 = fullName3 + " is taking up " + courseYr3 + " and also wants to become a " + djob3 + " after graduation.";

//printing 2ndclassmate's information
console.log(fsentence3 + sSentence3);
console.log(" ");