'use strict';

// Requires
require('jquery');

//let openMovieTestFunction = () => "I was created in the Open Movie file";


function getMovies(movie) {
	return  new Promise(function(resolve, reject) {
		$.ajax ({
			url: `http://www.omdbapi.com/?s=${movie}&type=movie`,
		}).done (function(movieData){
			resolve(movieData);
		
		// }).then((movieData) => {
		// 	return movieData;
		// });

	});
});	
}

getMovies()
.then((movieData) => {
	console.log("movieData", movieData);
	return movieData;
});
//this is how we tested data
// //let test = getMovies("matrix");
// console.log("test",test );

function getFullMovies(imdbID) {
	return new Promise(function(resolve, reject) {
		$.ajax ({
			url: `http://www.omdbapi.com/?i=${imdbID}`
		}).done (function(movieData){
			resolve(movieData);
		});
	});

}
getFullMovies()
.then((movieData) => {
	return movieData;
});



// let test2 = getFullMovies("tt0113277");
// console.log("test2", test2 );


module.exports = {getMovies, getFullMovies};