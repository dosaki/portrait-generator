const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'app', 'js'),
    filename: 'main.js'
  },
  devtool: 'source-map',
  resolve: {
    fallback: {
      "crypto": false
    }
  }
};