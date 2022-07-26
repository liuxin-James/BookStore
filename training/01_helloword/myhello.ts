console.log("hello world!!!");

// Variables
let found: boolean = true;
let firstName: string = "James";
let lastName: string = "Liu";
let James: any = 1;

console.log("hi " + firstName + " " + lastName);
console.log(`hi ${firstName} ${lastName}`);

// Loops
for (let i = 0; i < 5; i++){
    console.log(i);
}

let reveiws: number[] = [5, 5, 7, 8];
for (let i = 0; i < reveiws.length; i++){
    console.log(reveiws[i]);
}

let sportsOne : string[] = ["Golf", "Ticket", "Swimming"];
for (let tempSport of sportsOne){
    console.log(tempSport);
}

// Growable Array
let sportsTwo: string[] = ["Golf", "Ticket", "Swimming"];
sportsTwo.push("Baseball");
console.log(sportsTwo);