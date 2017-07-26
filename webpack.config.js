var HTMLWebPackPlugin = require('html-webpack-plugin');
var HTMLWebPackPluginConfig = new
HTMLWebPackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body' 
});

module.exports = {
  entry: __dirname + '/src/index.js', 
  module: {
    loaders: [
      {
        text: /\js$/,
        exclude: /node_modules/,
        loader: babel-loader
      }
    ]
  },
  {
    output: {
      filename: 'transformed.js',
      path: __dirname + '/build/'
    }
  },
  plugins: [HTMLWebPackPluginConfig]
};