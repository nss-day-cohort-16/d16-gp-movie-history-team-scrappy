'use strict';

// Requires
require("./favicon");
require("../sass/style.scss");
let Model = require("./model");

    // Input Elements
let navSearch      = $("#nav-Search"),
    navToWatch     = $("#nav-ToWatch"),
    //link elements
    navSignUp      = $("#nav-SignUp"),
    navLogIn       = $("#nav-LogIn"),
    navLogOut      = $("#nav-LogOut"),
    showTracked    = $("show-tracked"),
    showWatched    = $("show-watched"),
    // buttons
    searchOmdb     = $("search-omdb"),
    searchFb       = $("search-fb");

// Call needed functions in Model based on inputs

let test = Model.ModeltestFunction();
console.log("From Controller:", test);