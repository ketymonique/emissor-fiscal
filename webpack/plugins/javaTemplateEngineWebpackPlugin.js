// const
//   // ThymeleafInjectWebpackPlugin = require('thymeleaf-inject-webpack-plugin');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const JavaTemplateEngineWebpackPlugin = require("java-template-engine-webpack-plugin");

// module.exports = new ThymeleafInjectWebpackPlugin();

// new JavaTemplateEngineWebpackPlugin(HtmlWebpackPlugin, {engine: 'thymeleaf', addLeadingSlash: true, removeDotSegments : true}),

module.exports = new JavaTemplateEngineWebpackPlugin(
    HtmlWebpackPlugin, {
        engine: 'thymeleaf', 
        addLeadingSlash: true, 
        removeDotSegments : true
    })