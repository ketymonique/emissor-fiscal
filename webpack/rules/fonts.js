module.exports = {
  // test: /\.(eot|svg|ttf|woff|woff2)$/,
  test: /\.(eot|ttf|woff|woff2)$/,
  exclude : /(node_modules)/,
  use     : ['file-loader'],

};

// module.exports = {
//   test: /\.(eot|svg|ttf|woff|woff2)$/,
//   exclude : /(node_modules)/,
//   use     : [{
//     loader: 'file-loader',
//     options: {
//       outputPath: '../static/fonts'
//     }
//   }],

// };


