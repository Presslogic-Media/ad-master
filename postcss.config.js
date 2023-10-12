module.exports = {
    plugins: {
        "postcss-preset-env": {
            autoprefixer: { grid: true },
            browsers: [
              '> 1%',
              'last 2 versions',
              'ie >= 8',
              'ff > 31'
            ]
        },
        
    }
  };