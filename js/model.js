'use strict';

// Requires
let OpenMovie = require("./open-movie-interactions");
let Firebase = require("./firebase-interactions");
let User = require("./user");
let Render = require("./view");
let resultAll = {Search: []},
    resultOMDb = {Search: []},
    resultUntracked = {Search: []},
    resultTracked = {Search: []};

// write functions that are called based on inputs in controller. They use view,

let ModeltestFunction = () => "I was created in the Model";

let test2 = Render.viewTestFunction();
console.log("From Model:", test2);

let test3 = Firebase.firebaseTestFunction();
console.log("From Model:", test3);

let test4 = OpenMovie.openMovieTestFunction();
console.log("From Model:", test4);

// compare(result1, result2) returns 1 json file of unique movies
let compare = (omdb, fb) => {
  let tempIds = [];
// Populate resultAll with fb results bc these are defaults
  resultAll.Search.concat(fb.Search); // Will need an edit for the return value of FB search
  for (let i = 0; i<fb.Search.length; i++){
    tempIds.push(fb.Search[i].imdbID); // Will need an edit for the return value of FB search
  }
// compare omdb search results to tracked imdbIDs
  for (let i = 0; i < omdb.Search.length; i++){
    if (tempIds.includes(omdb.Search[i].imdbID)){
      //skip it
    } else {
      resultUntracked.Search.push(omdb.Search[i]);
      resultAll.Search.unshift(omdb.Search[i]);
    }
  }
  return resultAll;
};

// Call getUser() on page load, then call LoadPage(loggedIn).
let logIn = () => {
  User.logInGoogle();
  Render.loadPage(loggedUser());
};

let logOut = () => {
  User.logOut();
  Render.loadPage(loggedUser());
};

let loggedUser = () => {
  User.getUser();
};

// Check if someone is logged in (calls loadPage with argument yes or no)
Render.loadPage(loggedUser());

// search(input): use getUser() then call Firebase.searchFirebase(input) if applicable and OpenMovies.getMovies(input), save input, and call signIn something, then call compare(), renderMovies(object, search)
let searchAll = function(string){
  resultOMDb = OpenMovie.getMovies(string);
  if (loggedUser()){
    resultTracked = Firebase.searchFirebase(string);
    resultAll = compare(resultOMDb, resultTracked);
  } else {
    resultAll = resultOMDb;
  }
  Render.renderMovies(resultAll, "search");
};

// showUntracked() run compare and return only results that do not have firebase uid, then call renderMovies(object, untracked)
// resultUntracked is empty until we search, so this should display nothing unless first search is performed. As intended.
let showUntracked = () => {
  Render.renderMovies(resultUntracked, "untracked");
};

// showUnwatched() will call getWatched(false), then call renderMovies(object, unwatched)
let showUnwatched = () => {
  let unwatched = Firebase.getWatched(false);
  Render.renderMovies(unwatched, "unwatched");
};

// showWatched() will call getWatched(true), then call renderMovies(object, watched)
let showWatched = () => {
  let watched = Firebase.getWatched(true);
  Render.renderMovies(watched, "watched");
};

// showFavorites(), then call renderMovies(object, favorites)
let showFavorites = () => {
  let fave = Firebase.getFavorites();
  Render.renderMovies(fave, "favorites");
};

// AddMovie(movieId) will call getFullMovie(imdbID), call Firebase.addMovie(object), call renderCard(object)
let addMovie = (movieId) => {
  let fullMovie = OpenMovie.getFullMovies(movieId);
  Firebase.addMovie(fullMovie);
  Render.renderCard(fullMovie);
};

// DeleteMovie(movieId) will call hideMovie(),
let deleteMovie = (movieId) => {
  Firebase.deleteMovie(movieId);
  Render.hideMovie(movieId);
};

// UpdateRating(movieId, rating) will change object then call renderCard(object) with new object
// used to add to tracked (with add to watchlist) and add to watched (with rating)
let updateMovie = (obj, movieId) => {
  Firebase.editMovie(obj, movieId);
  let newMovie = Firebase.getMovie(movieId);
  Render.renderCard(newMovie);
};

// addToWatchList(movieId) push new object to firebase will call renderCard(object),
// REDUNDANT?
// let addToWatchList = (obj, movieId) => {
// };

module.exports = {ModeltestFunction,
                  searchAll,
                  showUntracked,
                  showWatched,
                  showUnwatched,
                  showFavorites,
                  updateMovie,
                  deleteMovie,
                  addMovie,
                  logIn,
                  logOut,
                  loggedUser}; // logic functions for controllers
