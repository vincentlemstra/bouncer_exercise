"use strict";

// preset the variables:
let age; // Can be any number between 0 and 120.
let gender; // Can be M, F or X.
let isDrunk; // Can be true or false.
let wearsCoolClothes; // Can be true or false.
let isLadiesNight; // Can be true or false.
let clubIsFull; // Can be true or false.

// temporary variables:
const adult = age >= 18;
let isFemale = false;
if (gender === "F") {
  (isFemale = true);
}

// bouncer check code:
if (!adult) {
    console.log("You're too young, please come back when you're older.");
} else if (isDrunk) {
    console.log("Please come back when you're sober.");
} else if (isLadiesNight && !isFemale) {
  console.log("It's ladies night, come back another night.");
} else if (clubIsFull && wearsCoolClothes) {
  console.log("Wow, cool clothes, come in!");
} else if (clubIsFull) {
  console.log("No, too busy right now.");
} else {
  console.log("Welcome!");
}  

// Zafar
age = 50;
gender = "F";
isDrunk = false;
wearsCoolClothes = true;
isLadiesNight = true;
clubIsFull = false;

// Storm
// age = 24;
// gender = "X";
// isDrunk = true;
// wearsCoolClothes = true;
// isLadiesNight = false;
// clubIsFull = true;

// Xiang
// age = 27;
// gender = "M";
// isDrunk = false;
// wearsCoolClothes = true;
// isLadiesNight = false;
// clubIsFull = true;

// age = 31;
// gender = "M";
// isDrunk = false;
// wearsCoolClothes = true;
// isLadiesNight = true;
// clubIsFull = true;

// Carla
// age = 50;
// gender = "F";
// isDrunk = false;
// wearsCoolClothes = false;
// isLadiesNight = false;
// clubIsFull = false;

// Alice
// age = 16;
// gender = "F";
// isDrunk = true;
// wearsCoolClothes = true;
// isLadiesNight = false;
// clubIsFull = false;


