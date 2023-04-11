const path = require('path');

module.exports = {
  entry: './app/public/server/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};