
module.exports = {
  entry: "./js/controller.js",
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    preLoaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    alias: {
      'jquery': '../node_modules/jquery/src/jquery.js'
    }
  }
};