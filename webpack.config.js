const path = require('path');

module.exports = {
  entry: './src/ui/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};