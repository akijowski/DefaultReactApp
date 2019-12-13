const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const Progress = require('webpack').ProgressPlugin;
const Config = require('webpack-chain');

const config = new Config();

config
    .entry('index')
        .add('./src/index.js')
        .end()
    .output
        .path(path.join(__dirname, '/dist'))
        .filename('[name].bundle.js');

config.module
    .rule('compile')
    .test(/\.js$/)
    .exclude
        .add('/node_modules/')
        .end()
    .use('babel')
        .loader('babel-loader')
        .options({
            presets: [
                ['@babel/preset-env', { modules: false }]
            ]
        });

config.module
    .rule('style')
    .test(/\.css$/)
    .use('style')
        .loader('style-loader')
        .loader('css-loader');

config.module
    .rule('images')
    .test(/\.(png|jpg|gif)$/)
        .use('image')
        .loader('file-loader')

config.plugin('envs')
    .use(Dotenv, [
        {
            systemvars: true
        }
    ]);

config.plugin('clean')
    .use(CleanWebpackPlugin);

config.plugin('progress')
    .use(Progress);

config.plugin('html')
    .use(HtmlWebPackPlugin, [
        { 
            hash: true,
            title: 'My App',
            template: './src/public/index.html' 
        }
    ]);


module.exports = config.toConfig();