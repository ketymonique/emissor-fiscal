module.exports = {
  test    : /\.(js)$/,
  exclude : /(node_modules|build|dist\/)/,
  use     : ['babel-loader'],

};


// module.exports = {
//   test    : /\.(js)$/,
//   exclude : /(node_modules|build|dist\/)/,
//   use     : [{
//     loader: 'babel-loader',
//     options: {
//       outputPath: '../static/js'
//     }
//   }],

// };

