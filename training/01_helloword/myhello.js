"use strict";
console.log("hello world!!!");
// Variables
let found = true;
let firstName = "James";
let lastName = "Liu";
let James = 1;
console.log("hi " + firstName + " " + lastName);
console.log(`hi ${firstName} ${lastName}`);
// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}
let reveiws = [5, 5, 7, 8];
for (let i = 0; i < reveiws.length; i++) {
    console.log(reveiws[i]);
}
let sportsOne = ["Golf", "Ticket", "Swimming"];
for (let tempSport of sportsOne) {
    console.log(tempSport);
}
// Growable Array
let sportsTwo = ["Golf", "Ticket", "Swimming"];
sportsTwo.push("Baseball");
console.log(sportsTwo);
