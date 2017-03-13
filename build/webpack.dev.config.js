var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var webpack = require('webpack');


// 引入基本配置
var config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
    //插件
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'app/index.html',
        template: path.resolve(__dirname, '../app/index.html'),
        inject: true
    })
];

//动态想入口配置中注入 webpack-hot-middleware/client

//old var devClient='webpack-hot-middleware/client';
var devClient = 'webpack-hot-middleware/client';
Object.keys(config.entry).forEach(function (name, i) {
    var extras = [devClient]
    config.entry[name] = extras.concat(config.entry[name])
})




module.exports = config;