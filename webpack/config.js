// ------------------
// @Table of Contents
// ------------------

/**
 * + @Loading Dependencies
 * + @Entry Point Setup
 * + @Path Resolving
 * + @Exporting Module
 */


// ---------------------
// @Loading Dependencies
// ---------------------

const
  path      = require('path'),
  manifest  = require('./manifest'),
  devServer = require('./devServer'),
  rules     = require('./rules'),
  plugins   = require('./plugins');


// ------------------
// @Entry Point Setup
// ------------------

const
  entry = [
    path.join(manifest.paths.src, 'assets', 'scripts', manifest.entries.js),
  ];


// ---------------
// @Path Resolving
// ---------------

const resolve = {
  extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js'],
  modules: [
    path.join(__dirname, '../node_modules'),
    path.join(manifest.paths.src, ''),
  ],
};


// -----------------
// @Exporting Module
// -----------------

const
  dir = src => path.join(__dirname, src);


module.exports = {
  devtool: manifest.IS_PRODUCTION ? false : 'source-map',
  context: path.join(manifest.paths.src, manifest.entries.js),
  // watch: !manifest.IS_PRODUCTION,
  entry,
  mode: manifest.NODE_ENV,
  // output: {
  //   path: manifest.paths.build,
  //   publicPath: '',
  //   filename: manifest.outputFiles.bundle,
  // },
  output: {
      // path: manifest.paths.build,
      path : path.resolve(__dirname, '../src/main/resources/static/')
    // publicPath: dir('../src/main/resources/static'),
    // filename: manifest.outputFiles.bundle,
  },
  module: {
    rules,
  },
  resolve,
  plugins,
  devServer,
};
