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
    showFavorites    = $("#show-favorites"),
    // Search field
    navSearch        = $("#nav-Search");

// Display correct data in correct section
let renderMovies = (movies, location) => {
  switch (location){
    case 'search':
      searchInject.html("display search stuff here.");
      break;
    case 'untracked':
      untrackedInject.html("display untracked stuff here.");
      console.log("load untracked");
      break;
    case 'unwatched':
      unwatchedInject.html("display unwatched stuff here.");
      console.log("load unwatched");
      break;
    case 'watched':
      watchedInject.html("display watched stuff here.");
      console.log("load watched");
      break;
    case 'favorites':
      favoritesInject.html("display favorites stuff here.");
    console.log("load favorites");
  }
};

// CHANGE VIEW STATES

// Search View
navSearch.keypress( () => {
  removeHelpText();
});

// Untracked View
showUntracked.click(function() {
  removeHelpText();
  clearActiveToggle();
  showUntracked.parent().addClass("active");
  hideViewStates();
  sectionUntracked.removeClass("hide");
breadcrumbs.html("<h3>Movie History > Show Untracked</h3");
});

// Unwatched View
showUnwatched.click(function() {
  removeHelpText();
  clearActiveToggle();
  showUnwatched.parent().addClass("active");
  hideViewStates();
  sectionUnwatched.removeClass("hide");
  breadcrumbs.html("<h3>Movie History > Show Unwatched</h3");
});

// Show Watched
showWatched.click(function() {
  removeHelpText();
  clearActiveToggle();
  showWatched.parent().addClass("active");
  hideViewStates();
  sectionWatched.removeClass("hide");
  breadcrumbs.html("<h3>Movie History > Show Watched</h3");
});

// Favorites
showFavorites.click(function() {
  removeHelpText();
  clearActiveToggle();
  showFavorites.parent().addClass("active");
  hideViewStates();
  sectionFavorites.removeClass("hide");
  breadcrumbs.html("<h3>Movie History > Favorites</h3");
});

// Base functions

// Remove active class on all toggles before adding current one
function clearActiveToggle() { $("label").removeClass("active"); }

// Add hide to all view states
function hideViewStates() {
  sectionSearch.addClass("hide");
  sectionUntracked.addClass("hide");
  sectionUnwatched.addClass("hide");
  sectionWatched.addClass("hide");
  sectionFavorites.addClass("hide");
}

// Remove helper text
function removeHelpText() { sectionStart.addClass("hide"); }

// Show sectoin-home OR section-unwatched
let loadPage = () => "I load a page";



// hideMovie(movieID)
let hideMovie = () => "I hide a movie";

// Testing
let viewTestFunction = () => "I was created in the View";

module.exports = {loadPage, renderMovies, hideMovie, viewTestFunction};

