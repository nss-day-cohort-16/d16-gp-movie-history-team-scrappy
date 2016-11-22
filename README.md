## Notes about Webpack

 Here are some notes about how this project uses Webpack.

1. Run `npm install` to download dependencies.
1. Run `webpack --watch` to compile the `dist/bundle.js` when something changes.
1. In another tab, run `webpack-dev-server`.

View the app at [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) and Webpack Dev Server will watches for changes and live-reload. `jshint` will also lint all javascript files on the fly in the tab you're running `webpack --watch`.

Below is our team's assignment from Nashville Software School

# Movie History

You will be split up into teams of three, and your team will build a new application to keep track of movies that you have seen, and want to see, with your own ratings based on [OMDb API](http://omdbapi.com/).

## Requirements
1. Must have the ability to register a user in Firebase
1. Must have the ability to log in
1. You must use Firebase to store movies
1. You must be able to add movies
1. You must be able to remove movies
1. Each movie must have the following properties
   1. Movie name
   1. Year released
   1. An array of major actors
   1. An integer rating of 1-5
   1. A boolean value that, if true, means that you have watched the movie
1. You must be using an automation tool to automate SASS compilation
1. For the layout, we suggest Bootstrap, but if you want to stretch your legs, you can try [Materialize](http://materializecss.com/).

## No Longer Required
1. <s>You must be using an automation tool to automate JavaScript testing</s>
1. <s>It must be written with Angular</s>

## Mockup

Review the [basic design](https://app.moqups.com/chortlehoort/uGBbLbK46Y/view/page/a3a0e7bf6) and ask questions to your product owner for clarification, or ideas on features.
