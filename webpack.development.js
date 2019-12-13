const Config = require('webpack-chain');

const config = new Config();

config
    .devtool('source-map');

config
    .devServer
        .stats('errors-only')
        .open(true)
        .overlay(true);

module.exports = config.toConfig();