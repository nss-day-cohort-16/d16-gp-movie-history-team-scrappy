'use strict';

// Requires
let fav = require("./favicon");
let sass = require("../sass/style.scss");
let model = require("./model");

		// Input Elements
let navSearch   = $("#nav-Search"), //keypress event
		addToWatchList = $("#add-toWatch"),
		navLogIn       = $("#nav-LogIn"),
		navLogOut      = $("#nav-LogOut"),
		showUntracked  = $("#show-untracked"),
		showUnwatched  = $("#show-unwatched"),
		showWatched    = $("#show-watched"),
		showFavorites  = $("#show-favorites");
		
		console.log("it's working");
	 
let activateEvents= function(){ 
		
	navLogIn.click(function(event) {
	console.log("you clicked the login button",event );
	model.logIn()
	.then(function(result){
		let user = result.user;
		navLogIn.addClass("hide-out");
		navLogOut.removeClass('hide-out');
	});
});


	navLogOut.click(function(event) {
	console.log("you clicked the logout button",event );
	model.logOut()
	.then(function() {
		navLogIn.removeClass("hide-out");
		navLogOut.addClass("hide-out");
		$("row-container").html("");
		});
	});

	navSearch.keypress(function(event) {
	console.log("you clicked the search keypress", event);
	if(event.keycode === 13) {
		let searchResult = $("nav-Search").val();
		model.searchOmdb(searchResult);
		$("nav-Search").val('');
		}	
});

$(document).on("click", ".add-toWatch",(event) => {
	console.log("you clicked add to watchlist", event );
	let addId = event.target.id;
	model.searchId(addId)
		.then((movieObj) => {
		 model.addToFirebase(movieObj);
		});
});

addToWatchList.click(function(event) {
		console.log("you clicked add to watchlist", event );
		model.addToFirebase();
	});

showUntracked.click(function(event) {
	console.log("you clicked show untracked ",event );
	model.showUntracked();
});

showUnwatched.click(function(event) {
	console.log("you clicked show unwatched",event );

		model.showUnwatched();
});
showWatched.click(function(event) {
	console.log("you clicked show watched",event );

		model.showWatched();
});

showFavorites.click(function(event) {
	console.log("click event",event );

		model.showFavorites();
	});
};

activateEvents();

