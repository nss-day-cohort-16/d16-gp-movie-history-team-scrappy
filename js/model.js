'use strict';

// Requires
let OpenMovie = require("./open-movie-interactions");
let Firebase = require("./firebase-interactions");
let Render = require("./view");

// write functions that are called based on inputs in controller. They use view,

let ModeltestFunction = () => "I was created in the Model";

let test2 = Render.viewTestFunction();
console.log("From Model:", test2);

let test3 = Firebase.firebaseTestFunction();
console.log("From Model:", test3);

let test4 = OpenMovie.openMovieTestFunction();
console.log("From Model:", test4);

module.exports = {ModeltestFunction}; // logic functions for controllers