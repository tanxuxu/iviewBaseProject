const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

fs.open('./src/config/env.js', 'w', function(err, fd) {
    const buf = 'export default "production";';
    fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
});

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/build/',
        filename: './js/[name].[hash].js',
        chunkFilename: './js/[name].[hash].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/[name].[hash].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: './js/vendors.[hash].js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new UglifyJsPlugin({
          parallel: true,
          uglifyOptions: {
            ie8: false,
            ecma: 6,
            warnings: false,
            mangle: true,
            output: {
              comments: false,
              beautify: false,
            },
            compress: {
              warnings: false,
              drop_console: true,
              collapse_vars: true,
              reduce_vars: true,
            }
          }
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/template/index.ejs',
            inject: false
        }),
        new CleanWebpackPlugin('./build',{
          exclude:  ['global.js']   //除去global.js配置文件
        })   //每次打包清空build目录，避免重复的文件产生
    ]
});
