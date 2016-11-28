'use strict';

// Requires
require('jquery');

    // Pages elements to toggle with "hide" class
let sectionStart     = $("#section-Start"),
    sectionSubNav    = $("#section-SubNav"),
    sectionSearch    = $("#section-Search"),
    sectionUntracked = $("#section-Untracked"),
    sectionUnwatched = $("#section-Unwatched"),
    sectionWatched   = $("#section-Watched"),
    sectionFavorites = $("#section-Favorites"),
    // Places to inject content
    breadcrumbs      = $("#breadcrumbs"),
    searchInject     = $("#searchInject"),
    untrackedInject  = $("#untrackedInject"),
    unwatchedInject  = $("#unwatchedInject"),
    watchedInject    = $("#watchedInject"),
    favoritesInject  = $("#favoritesInject"),
    // Toggles
    showUntracked    = $("#show-untracked"),
    showUnwatched    = $("#show-unwatched"),
    showWatched      = $("#show-watched"),
    showFavorites    = $("#show-favorites");


// Show correct breadcrumbs when someone clicks enter within search bar or clicks a toggle button

// TOGGLING LOGIC

// Remove active class on all toggles before adding current one
function clearActiveToggle() { $("label").removeClass("active"); }


showUntracked.click(function() {
clearActiveToggle();
showUntracked.parent().addClass("active");
breadcrumbs.html("<h3>Movie History > Show Untracked</h3");
});

showUnwatched.click(function() {
clearActiveToggle();
showUnwatched.parent().addClass("active");
breadcrumbs.html("<h3>Movie History > Show Unwatched</h3");
});

showWatched.click(function() {
clearActiveToggle();
showWatched.parent().addClass("active");
breadcrumbs.html("<h3>Movie History > Show Watched</h3");
});

showFavorites.click(function() {
clearActiveToggle();
showFavorites.parent().addClass("active");
breadcrumbs.html("<h3>Movie History > Favorites</h3");
});


// loadPage(loggedIn) takes yes or no. show sectoin-home OR section-unwatched
let loadPage = () => "I load a page";

// renderMovies(object, state) state switches = favorites, watched, unwatched, untracked, search (hide correct toggles, display correct container, push results)
let renderMovies = () => "I render movies";




// hideMovie(movieID)
let hideMovie = () => "I hide a movie";

// Testing
let viewTestFunction = () => "I was created in the View";

module.exports = {loadPage, renderMovies, hideMovie, viewTestFunction};

