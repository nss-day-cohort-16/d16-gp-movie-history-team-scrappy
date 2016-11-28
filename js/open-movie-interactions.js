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



function getFullMovies(imdbID) {
	return new Promise(function(resolve, reject) {
		$.ajax ({
			url: `http://www.omdbapi.com/?i=${imdbID}`
		}).done (function(movieData){
			resolve(movieData);
		});
	});

}


module.exports = {getMovies, getFullMovies};
