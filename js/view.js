'use strict';

// Requires
require('jquery');

    // Pages To Toggle With "hide" class
let sectionHome    = $("#section-Home"),
    sectionSearch  = $("#section-Search"),
    sectionToWatch = $("#section-ToWatch"),
    sectionWatched = $("#section-Watched"),
    // Places To Inject Content
    homeInject     = $("#homeInject"),
    searchInject   = $("#searchInject"),
    watchedInject  = $("#watchedInject"),
    toWatchInject  = $("#toWatchInject");

// Test
$("#homeInject").html("<p>To get started tracking movies you'd like to watch, sign in at the top right, and then search for a movie name in the search bar above.</p>");

let viewTestFunction = () => "I was created in the View";

module.exports = {viewTestFunction};