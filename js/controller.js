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
           
navLogIn.click(function(event) {
 console.log("you clicked the login button",event );
 model.logIn();
 
 });
navLogOut.click(function(event) {
console.log("you clicked the logout button",event );
model.logOut();

});

navSearch.keypress(function(event) {
// console.log("you clicked the search keypress", event);
if(event.keyCode === 13) {

let searchResult = navSearch.val();
console.log("searchResult", searchResult);
model.searchAll(searchResult);
navSearch.val('');

}   
});


//listening to 4 toggle options
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
console.log("click event for showFavorites",event );

model.showFavorites();
});



