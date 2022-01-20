const
  path              = require('path'),
  manifest          = require('../manifest'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

// const  dir = src => path.join(__dirname, ../src/main/resources/static);

module.exports = new CopyWebpackPlugin({
  patterns: [
  {
    from : path.join(manifest.paths.src, 'assets/static'),
    // to   : path.join(manifest.paths.build, 'assets/static'),
    // to   : path.resolve(__dirname, ' ../src/main/resources/static/assets/static') 
        to   : path.join(manifest.paths.static, 'assets/static'),

  },
]
});
