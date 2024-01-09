alert("Hello!");
alert("Starting your Mars Adventure");
alert("Booting up...");
alert("All systems go!");
alert("Lets start!");

// Gets the users name
const username = prompt("Hi, there. What's your name?");
alert(`Hi ${username} -- Welcome to The Mars Adventure Game`);

// Asks the user what planet they want to go to.
let planet = prompt("What planet would you like to go to?");
planet = planet.toLowerCase();
planet = planet.trim();

if (planet === "saturn") {
    alert("Sorry, but the spaceship for Saturn left last week.");
} else if (planet === "venus") {
    alert("Going to Venus isn't worth the trip");
} else if (planet === "mercury") {
    alert("It's the wrong season to travel to Mercury");
} else {
    alert("Mars is far more interesting anyways.");
}

alert("Yesterday, you recieved a call from your good friend at NASA.");
alert("They need someone to go to Mars this weekend, and YOU'VE been chosen!!");

let excited = prompt("Are you exicted? Type Y or N");
excited = excited.toUpperCase();
excited = excited.trim();

if (excited.start === "Y" || excited.startsWith("Y")) {
    alert("I knew you'd say that. It's so cool that you're going to Mars.")
} else {
    alert("Well, it's too late to back out now.")
}

alert("It's time to pack for your trip to Mars");
let numSuitcases = prompt("How many suitcases do you plan to bring?");
numSuitcases = Number(numSuitcases);

if (numSuitcases > 2) {
    alert("That's way too many. You'll have to pack more lightly.");
    alert("Please try to fit your stuff into 2 suitcases.")
} else {
    alert("Perfect. You'll certainly fit in the spaceship");
}

// Questions and prompts for the 1st companion
alert("You're allowed to bring one companion animal with you.");
let companionType = prompt("What is the companion animal would you like to bring?");
let companionName = prompt("What is your companion's name?");

// Formats the companions name correctly
let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();
let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();
companionName = firstLetter + otherLetters;

let firstLetter2 = companionType[0];
firstLetter2 = firstLetter2.toUpperCase();
let otherLetters2 = companionType.slice(1);
otherLetters2 = otherLetters2.toLowerCase();
companionType = firstLetter2 + otherLetters2;

alert(`Cool, so you're bringing ${companionName} the ${companionType}.`);

// Questions and prompts for the 2nd companion
alert("You've been allowed to have one more additional companion");

let companionType2 = prompt("What is the 2nd companion animal would you like to bring?");
let companionName2 = prompt("What is your 2nd companion's name?");

// Formats the 2nd companions name correctly
let firstLetter3 = companionName2[0];
firstLetter3 = firstLetter3.toUpperCase();
let otherLetters3 = companionName2.slice(1);
otherLetters3 = otherLetters3.toLowerCase();
companionName2 = firstLetter3 + otherLetters3;

let firstLetter4 = companionType2[0];
firstLetter4 = firstLetter4.toUpperCase();
let otherLetters4 = companionType2.slice(1);
otherLetters4 = otherLetters4.toLowerCase();
companionType2 = firstLetter4 + otherLetters4;

alert(`Cool, so you're also bringing ${companionName2} the ${companionType2}.`);

// Questions and prompts for the spaceship design
alert("NASA has an interior design team offering to outfit your space ship.");
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A Sleek, modern minimalism
B Retro/vintage space age 
C Victorian-era steampunk
D Disco
`);

let decorChoice = prompt(`What decour choice would you like ${username}? (Enter A, B, C, or D)`);
decorChoice = decorChoice.toUpperCase();

let decor = "no decor";
if (decorChoice === "A") {
    decor = "modern minimalist";
} else if (decorChoice === "B") {
    decor = "retro";
} else if (decorChoice === "C") {
    decor = "steampunk";
} else if (decorChoice === "D") {
    decor = "disco";
} else {
    decor = "no decor";
}

// Shows the final message before liftoff
alert(`${username}, ${companionName}, and ${companionName2}, surfing the celestial abyss, in a ${decor} themed spaceship.`);


// Alerts for the countdown and temperature.

let temp = 0;
while (temp < 1200) {
    let alerts = alert(`Temp is: ${temp} degrees`);
    // setTimeout(doesNothing, 2000);
    temp += 100;
}

let timer = 5;
while (timer > 0) {
    alert(`${timer}...`);
    timer -= 1;
}

alert("*** LIFTOFF ***");