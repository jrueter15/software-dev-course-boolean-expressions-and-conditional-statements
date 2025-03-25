/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = true;
let hasPotion = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains") {
  if (hasTorch) {
      console.log("You safely navigate through the dark mountains and find a hidden cave.");
      const exploreCave = readline.question("Do you enter the cave? (yes/no) ");
      if (exploreCave === "yes" && hasSword) {
          console.log("A wild animal attacks! Luckily, you have a sword and defeat it. You find treasure!");
      } else if (exploreCave === "yes" && !hasSword) {
          console.log("A wild animal attacks! You have no weapon and barely escape with your life.");
      } else {
          console.log("You decide to stay outside. The mountain is cold, and you don't survive the night.");
      }
  } else {
      console.log("It's too dark to proceed. You decide to turn back.");
  }
} else if (choice === "village") {
  if (hasMap || hasCompass) {
      console.log("You find your way to the village and rest at an inn.");
      const visitMarket = readline.question("Do you visit the market? (yes/no) ");
      if (visitMarket === "yes") {
          console.log("You purchase a healing potion.");
          hasPotion = true;
      } else {
          console.log("You decide to save your money and explore the village.");
      }
  } else {
      console.log("You get lost and wander aimlessly, eventually finding shelter in an abandoned house.");
  }
} else {
  console.log("You hesitate too long, and night falls. Creatures stir in the darkness, and you are forced to flee.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/