const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const devConfig = require('./webpack.development');
const prodConfig = require('./webpack.production');

module.exports = mode => {
  console.log(`Building configuration for ${mode}`);
  if (mode === 'production') {
    return merge(baseConfig, prodConfig, {mode});
  }
  return merge(baseConfig, devConfig, {mode});
}