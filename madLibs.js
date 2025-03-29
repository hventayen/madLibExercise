//madLibs.js
/* Step 2: Declare and assign values to variables
Include:
Strings (e.g., const timeOfDay = "sunny afternoon";).
Numbers (e.g., const mathResult = 2 + 2;).
A boolean expression (e.g., const booleanValue = timeOfDay.includes("afternoon");).
An object with properties (e.g., const person = { name: "Mike", age: 25 };).
*/
const string1 = "stormy night";
const loc = "haunted house";
let walls = {
    name: "creaking walls",
    action: "whisper",
    trait: "chills down my spine"
};
const num1 = 10;
const num2 = 7;
const num3 = num1 - num2;
const isItSpooky = loc.includes("haunted");

// Step 1: Paste in one of the story templates above
const story = `
On a ${string1}, I ventured into the ${loc}. 
The ${walls.name} seemed to ${walls.action}, sending 
${walls.trait}. Suddenly, a ghost appeared, its glowing 
eyes piercing through the darkness. My heart raced 
as it floated silently toward me. Did you know ${num1} - ${num2} 
equals ${num3}? Spooky, right?
`;
document.getElementById("madlibs-output").textContent = story;
console.log(story);