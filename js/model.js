'use strict';

// Requires
let OpenMovie = require("./open-movie-interactions");
let Firebase = require("./firebase-interactions");
let User = require("./user");
let Render = require("./view");
let searchResultAll = {Search: []},
    searchResultTracked = {Search: []},
    userMovies = {Search: []},
    resultOMDb = {Search: []},
    resultUntracked = {Search: []},
    location = '',
    searchString = '';

// write functions that are called based on inputs in controller. They use view,

// compare(result1, result2) returns 1 json file of unique movies
let compare = (omdb, fb) => {
  let tempIds = [];
// Populate searchResultAll with fb results bc these are defaults
  searchResultAll.Search.concat(fb.Search); // Will need an edit for the return value of FB search
  for (let i = 0; i<fb.Search.length; i++){
    tempIds.push(fb.Search[i].imdbID); // Will need an edit for the return value of FB search
  }
// compare omdb search results to tracked imdbIDs
  for (let i = 0; i < omdb.Search.length; i++){
    if (tempIds.includes(omdb.Search[i].imdbID)){
      //skip it
    } else {
      resultUntracked.Search.push(omdb.Search[i]);
      searchResultAll.Search.unshift(omdb.Search[i]);
    }
  }
  return searchResultAll;
};

let checkLocation = function (str) {
  switch (str){
    case 'search':
      searchAll(searchString);
      break;
    case 'untracked':
      showUntracked();
      break;
    case 'unwatched':
      showUnwatched();
      break;
    case 'watched':
      showWatched();
      break;
    case 'favorites':
      showFavorites();
      break;
  }
};

let userLocation = function(str){
  location = str;
};

let loggedUser = () => {
  if (User.getUser() === null){
    return false;
  } else {
  return User.getUser();
  }
};

// Call getUser() on page load, then call LoadPage(loggedIn).
let logIn = () => {
  User.logInGoogle();
  landingPage(loggedUser());
  Render.loadPage(loggedUser());
};

let logOut = () => {
  User.logOut();
  Render.loadPage(loggedUser());
};

let landingPage = (uid) => {
  if (uid) {
    Firebase.getMovies(uid)
    .then(function(movieData){
      var idArr = Object.keys(movieData);
      idArr.forEach(function (key) {
        movieData[key].movieId = key;
        userMovies.Search.push(movieData[key]);
      });
    });
  } else {
    Render.loadPage(false);
  }
};

// Check if someone is logged in (calls loadPage with argument yes or no)
Render.loadPage(loggedUser());

// search(input): use getUser() then call Firebase.searchFirebase(input) if applicable and OpenMovies.getMovies(input), save input, and call signIn something, then call compare(), renderMovies(object, search)
let searchAll = function(string){
  searchResultAll = {Search: []};
  location = 'search';
  OpenMovie.getMovies(string)
  .then((movieData) => {
console.log("searchAll called omdb with: ", string);
    resultOMDb = movieData;
    searchString = string.toLowerCase();
    if (loggedUser()){
      // searchResultTracked = Firebase.searchFirebase(string);
      for (let i=0; i<userMovies.Search.length; i++){
        for (let title in userMovies.Search[i]){
          if (userMovies.Search[i].title.toLowerCase().contains(searchString)){
            searchResultTracked.Search.push(userMovies.Search[i]);
          }
        }
      }
      searchResultAll = compare(resultOMDb, searchResultTracked);
    } else {
      searchResultAll = resultOMDb;
    }
    Render.renderMovies(searchResultAll, "search");
  });
};

// showUntracked() run compare and return only results that do not have firebase uid, then call renderMovies(object, untracked)
// resultUntracked is empty until we search, so this should display nothing unless first search is performed. As intended.
let showUntracked = () => {
  location = 'untracked';
  Render.renderMovies(resultUntracked, "untracked");
};

// showUnwatched() will call getWatched(false), then call renderMovies(object, unwatched)
let showUnwatched = () => {
  location = 'unwatched';
  let unwatched = {Search: []};
  userMovies.Search.forEach(function (el, ind, arr) {
    if (!el.watched){
      unwatched.Search.push(el);
    }
  });
  Render.renderMovies(unwatched, "unwatched");
};

// showWatched() will call getWatched(true), then call renderMovies(object, watched)
let showWatched = () => {
  location = 'watched';
  let watched = {Search: []};
  userMovies.Search.forEach(function (el, ind, arr) {
    if (el.watched){
      watched.Search.push(el);
    }
  });
  Render.renderMovies(watched, "watched");
};

// showFavorites(), then call renderMovies(object, favorites)
let showFavorites = () => {
  location = 'favorites';
  let fave = {Search: []};
  userMovies.Search.forEach(function (el, ind, arr) {
    if (parseInt(el.rating) === 10){
      fave.Search.push(el);
    }
  });
  Render.renderMovies(fave, "favorites");
};

let addMovie = (movieId) => {
  console.log("addMovie function runs");
  OpenMovie.getFullMovies(movieId)
  .then(function(movieData){
    console.log("movieData in then of AddMovie:", movieData);
    let fullMovie = {
    "Year" : movieData.Year,
    "Actors" : movieData.Actors,
    "Title" : movieData.Title,
    "Watched" : false,
    "Rating" : 0,
    "Poster" : movieData.Poster,
    "imdbID" : movieData.imdbID
    };
    Firebase.addMovie(fullMovie);
  });
  Render.hideMovie(movieId);
  landingPage(loggedUser());
  checkLocation(location);
  // Render.renderCard(fullMovie);
};

// DeleteMovie(movieId) will call hideMovie(),
let deleteMovie = (movieId) => {
  Firebase.deleteMovie(movieId);
  Render.hideMovie(movieId);
};

// UpdateRating(movieId, rating) will change object then call renderCard(object) with new object
// used to add to tracked (with add to watchlist) and add to watched (with rating)
let updateMovie = (movieId, rating) => {
  let tempMovie = function (ID) {
    for (let i = 0; i<userMovies.Search.length; i++){
      if (userMovies.Search[i].imdbID === ID){
        return userMovies.Search[i];
      }
    }
  };
  let fullMovie = {
    "Year" : tempMovie.year,
    "Actors" : tempMovie.actors,
    "Title" : tempMovie.title,
    "Watched" : true,
    "Rating" : rating,
    "Poster" : tempMovie.poster,
    "imdbID" : tempMovie.imdbID   
  };
  Firebase.editMovie(fullMovie, movieId);
  let newMovie = Firebase.getMovie(movieId);
  landingPage(loggedUser());
  checkLocation(location);
  // Render.renderCard(newMovie);
};

module.exports = {searchAll,
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
