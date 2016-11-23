'use strict';

// Requires
let fav = require("./favicon");
let sass = require("../sass/style.scss");
let model = require("./model");

		// Input Elements
let navSearch      = $("#nav-Search"), //keypress event
				addToWatchList = $("#add-toWatch"),
				//navToWatch     = $("#nav-ToWatch"),
				//navSignUp      = $("#nav-SignUp"),
				navLogIn       = $("#nav-LogIn"),
				navLogOut      = $("#nav-LogOut"),
				showUntracked		= $("#show-untracked"),
				showUnwatched  = $("#show-unwatched"),
				showWatched    = $("#show-watched"),
				showFavorites		= $("#show-favorites");
				// searchOmdb     = $("search-omdb"),
				// searchFb       = $("search-fb");

console.log("it's working");
	 
		model.logIn();
		let sign = model.logIn();
		console.log("sign",sign );

	let activateEvents= function(){ 
		//console.log("activateEvents", activateEvents);
	navLogIn.click(function(event) {
		console.log("event",event );
		model.logIn()
			.then(function(result){
				let user = result.user;
				navLogIn.addClass("hide-out");
				navLogOut.removeClass('hide-out');
			});
});


	navLogOut.click(function(event) {
		console.log("event",event );
		model.logOut()
		.then(function() {
				navLogIn.removeClass("hide-out");
				navLogOut.addClass("hide-out");
				$("row-container").html("");
		});
	});

	navSearch.keypress(function(event) {
		console.log(event);
		if(event.keycode === 13) {
			let searchResult = $("nav-Search").val();
			model.searchOmdb(searchResult);
			$("nav-Search").val('');
		}	
});

$(document).on("click", ".add-toWatch",(event) => {
	console.log("event", event );
		let addId = event.target.id;
			console.log("addId",addId );
		model.searchId(addId)
		.then((movieObj) => {
				model.addToFirebase(movieObj);
		});
});

	addToWatchList.click(function(event) {
		console.log("event", event );
		model.addToFirebase();
	});

	showUntracked.click(function(event) {
	console.log("event",event );
	model.showUntracked();
});

showUnwatched.click(function(event) {
	console.log("event",event );

		model.showUnwatched();
});
	showWatched.click(function(event) {
	console.log("event",event );

		model.showWatched();
});

	showFavorites.click(function(event) {
		console.log("event",event );

		model.showFavorites();
	});
};
activateEvents();

module.exports = {activateEvents};