'use strict';

// Requires
let OpenMovie = require("./open-movie-interactions");
let Firebase = require("./firebase-interactions");
let Render = require("./view");

// write functions that are called based on inputs in controller. They use view,

let ModeltestFunction = () => "I was created in the Model";
let showUntracked = () => " Show untracked movie list";
let test2 = showUntracked();
console.log("From Model:", test2);

let test3 = Firebase.firebaseTestFunction();
console.log("From Model:", test3);

// let test4 = OpenMovie.openMovieTestFunction();
// console.log("From Model:", test4);
// function showUntracked(event){
// 	return event;
// }
// showUntracked();
// let test = Render.showUntracked();
// console.log("test", test);

let logIn = function(){
	return "this is a log in place";
};
//let test4 = logIn();
console.log("test", logIn() );


module.exports = {showUntracked, logIn}; // logic functions for controllers