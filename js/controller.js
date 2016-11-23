'use strict';

// Requires
let fav = require("./favicon");
let sass = require("../sass/style.scss");
let model = require("./model");

		// Input Elements
let navSearch      = $("#nav-Search"), //keypress event
				addToWatchList = $("add-toWatch"),
				navToWatch     = $("#nav-ToWatch"),
				navSignUp      = $("#nav-SignUp"),
				navLogIn       = $("#nav-LogIn"),
				navLogOut      = $("#nav-LogOut"),
				showUntracked		= $("#show-untracked"),
				showUnwatched  = $("show-unwatched"),
				showWatched    = $("show-watched"),
				showFavorites		= $("show-favorites");
				// searchOmdb     = $("search-omdb"),
				// searchFb       = $("search-fb");

console.log("it's working");
	 
		model.logIn();
		let sign = model.logIn();
		console.log("sign",sign );

	let activateEvents= function(){ 
		//console.log("activateEvents", activateEvents);
	navLogIn.click(function(event) {
		model.logIn()
			.then(function(result){
				let user = result.user;
				navLogIn.addClass("hide");
				navLogOut.removeClass('hide');
			});
});


	navLogOut.click(function(event) {
		model.logOut()
		.then(function() {
				navLogIn.removeClass("hide");
				navLogOut.addClass("hide");
				$("row-container").html("");
		});
	});

	navSearch.keypress(function(event) {
		if(event.keycode === 13) {
			let searchResult = $("nav-Search").val();
			model.searchOmdb(searchResult);
			$("nav-Search").val('');
		}	
});

$(document).on("click", ".add-toWatch",(event) => {
		let addId = event.target.id;
			console.log("addId",addId );
		model.searchId(addId)
		.then((movieObj) => {
				model.addToFirebase(movieObj);
		});
});

	addToWatchList.click(function(event) {
		model.addToFirebase();
	});

showUntracked.click(function(event) {
	model.showUntracked();
});

showWatched.click(function(event) {
		model.showWatched();
});

showFavorites.click(function(event) {
		model.showFavorites();
	});
};
activateEvents();

module.exports = {activateEvents};