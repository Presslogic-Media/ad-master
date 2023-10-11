
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack-config-base');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(baseConfig, {
    entry: {
      main: path.resolve(__dirname, '../src/index'),
    },
    output: {
      path: path.resolve(__dirname, '../lib'),
      filename: 'index.js',
      library: 'ad-master',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/ad-master/types',
            to: 'types'
          }
        ]
      })
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: true,
            keep_fnames: true
          }
        })
      ]
    }
})