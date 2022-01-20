const
  manifest          = require('../manifest'),
  HtmlWebpackPlugin = require('html-webpack-plugin')
  JavaTemplateEngineWebpackPlugin = require('java-template-engine-webpack-plugin');

const plugins = [];

plugins.push(
  // require('./thymeleafInjectWebpackPlugin'),
  // new JavaTemplateEngineWebpackPlugin(HtmlWebpackPlugin, {engine: 'thymeleaf', addLeadingSlash: true, removeDotSegments : true}),
  require('./javaTemplateEngineWebpackPlugin'),
  require('./imageminPlugin'),
  ...(require('./htmlPlugin')),
  ...(require('./internal')),
  require('./caseSensitivePlugin'),
  require('./extractPlugin'),
  require('./copyPlugin')
);

if (manifest.IS_DEVELOPMENT) {
  plugins.push(require('./dashboardPlugin'));
}

if (manifest.IS_PRODUCTION) {
  plugins.push(require('./copyPlugin'));
}

module.exports = plugins;
