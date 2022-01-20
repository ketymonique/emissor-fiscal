module.exports = {
  test    : /\.(png|gif|jpg?g|svg)$/i,
  exclude : /(node_modules)/,
  use     : [{
    loader: 'file-loader',
    options: {
      outputPath: 'assets',
      // outputPath: '../static/assets/images',
    },
  }],
};

// TENTANDO igual o de FONTS.. PS: o Código acima ^^ é o orignal
// module.exports = {
//   // test: /\.(eot|svg|ttf|woff|woff2)$/,
//   test    : /\.(png|gif|jpg?g|svg)$/i,
//   exclude : /(node_modules)/,
//   use     : ['file-loader'],

// };

// module.exports = {
//   test    : /\.(png|gif|jpg?g|svg)$/i,
//   exclude : /(node_modules)/,
//   use     : [{
//     loader: 'file-loader',
//     options: {
//       // outputPath: 'assets',
//         // outputPath: '../static/fonts'
//       outputPath: '../static/img'
//     },
//   }],
// };
