const { VueLoaderPlugin } = require('vue-loader')
const Webpackbar = require('webpackbar');

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
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
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
