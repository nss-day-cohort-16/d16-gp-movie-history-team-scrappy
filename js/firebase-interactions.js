'use strict';

// Requires
let $ = require('jquery'),
	firebase = require("./firebaseConfig");

let firebaseTestFunction = () => "I was created in the Firebase file";


// ****************************************
// DB interaction using Firebase REST API
// ****************************************


function getMovies(user) {
	return new Promise(function(resolve, reject) {
		$.ajax ({
			url: `https://scrappy-eb326.firebaseapp.com/movies.json?orderBy="uid"&equalTo="${user}"`
		}).done (function(movieData) {
			resolve(movieData);
		});
	});
}

// adds a new movie, in the form of an object, to the collection
function addMovie(movieFormObj) {
	return new Promise(function(resolve, reject) {
		$.ajax ({
			url: 'https://scrappy-eb326.firebaseapp.com/movies.json',
			type: 'POST',
			data: JSON.stringify(movieFormObj),
			dataType: 'json'
		}).done(function(movieID){
			resolve(movieID);
		});
	});
}

// POST - Submits data to be processed to a specified resource. Takes one parameter.
function deleteMovie(movieId) {
	console.log("delete Movie");
	return new Promise(function(resolve, reject) {
		$.ajax ({
			url: `https://scrappy-eb326.firebaseapp.com/movies/${movieId}.json`,
			method: "DELETE"
		}).done(function() {
			resolve();
		});
	});
}


// Gets by MovieId
function getMovie(movieId) {
	return new Promise(function(resolve, reject) {
		$.ajax ({
			url: `https://scrappy-eb326.firebaseapp.com/movies/${movieId}.json`
		}).done(function(movieData) {
			resolve(movieData);
		}).fail(function(error){
			reject(error);
		});
	});
}


function editMovie(movieFormObj, movieId) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `https://scrappy-eb326.firebaseapp.com/movies/${movieId}.json`,
			type: 'PUT',
			data: JSON.stringify(movieFormObj)
		}).done(function(data) {
			resolve(data);
		});
	});
}

module.exports = {
	firebaseTestFunction,
	getMovies,
	addMovie,
	getMovie,
	deleteMovie,
	editMovie
};


