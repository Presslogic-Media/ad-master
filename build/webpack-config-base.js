const { VueLoaderPlugin } = require('vue-loader')
const Webpackbar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stats: 'errors-only',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // externals: {
  //   vue: 'Vue'
  // },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      /** 处理sass样式 */
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: "[id].css"
    }),
    new Webpackbar({
      name: 'Webpack 构建'
    })
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'src/ad-master/types',
    //       to: 'types'
    //     }
    //   ]
    // })
  ],
}
