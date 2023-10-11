
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack-config-base')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '../src/playground/index'),
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
    },
    devServer: {
        host: 'localhost',
        port: 8000,
        static: path.resolve(__dirname, '../dist'),
        hot: true, // 会默认注入HotModuleReplacementPlugin
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html',
          // minify: true, // 压缩html
        }),
    ],
})