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
      searchInject.html("<p>display search stuff here.</p>");
      console.log("movies.Search:", movies.Search);
      let content = "";
      for (let i = 0; i < movies.Search.length; i++) {
        content += `
          <div id="movie-${movies.Search[i].imdbID}" class="movie col-sm-4 card">
            <a id="delete-${movies.Search[i].imdbID}" href="#">Delete Card</a><br/>
            <img class="movieImage" src="${movies.Search[i].Poster}"/><br/>
            <a id="add-${movies.Search[i].imdbID}">Add to Watchlist</a>
          </div>
        `;

        // Event Listeners for each add button
        /*jshint loopfunc: true */
        // let target = `"#add-${movies.Search[i].imdbID}"`;




      }
        // $(document).on( "click", "#add-tt0072890", function() {
        //   console.log("you clicked the first dog movie");
        //   Model.addMovie("tt0072890");
        // });




      searchInject.append(content);
      break;
    case 'untracked':
      console.log("movies:", movies);
      untrackedInject.html("<p>display untracked stuff here.</p>")
      .append(bundleCard()).append(bundleCard()).append(bundleCard());
      break;
    case 'unwatched':
      console.log("movies:", movies);
      unwatchedInject.html("display unwatched stuff here.");
      console.log("load unwatched");
      break;
    case 'watched':
      console.log("movies:", movies);
      watchedInject.html("display watched stuff here.");
      console.log("load watched");
      break;
    case 'favorites':
      console.log("movies:", movies);
      favoritesInject.html("display favorites stuff here.");
    console.log("load favorites");
  }
};

// CHANGE VIEW STATES

// Search View
navSearch.keypress( () => {
  removeHelpText();
  clearActiveToggle();
  hideViewStates();
  sectionSearch.removeClass("hide");
breadcrumbs.html("<h3>Movie History > Search</h3");
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

// BASE FUNCTIONS

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


function bundleCard() {

}

// Show sectoin-home OR section-unwatched
let loadPage = () => "I load a page";


// hideMovie(movieID)
let hideMovie = () => "I hide a movie";

// Testing
let viewTestFunction = () => "I was created in the View";

module.exports = {loadPage, renderMovies, hideMovie, viewTestFunction};
