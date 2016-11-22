'use strict';

// Requires
require("./favicon");
require("../sass/style.scss");
let Model = require("./model");

    // Input Elements
let navSearch      = $("#nav-Search"),
    navToWatch     = $("#nav-ToWatch"),
    navWatched     = $("#nav-Watched"),
    navSignUp      = $("#nav-SignUp"),
    navLogIn       = $("#nav-LogIn"),
    navLogOut      = $("#nav-LogOut");

// Call needed functions in Model based on inputs

let test = Model.ModeltestFunction();
console.log("From Controller:", test);