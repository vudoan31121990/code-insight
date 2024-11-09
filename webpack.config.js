// webpack.config.js
module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/, // Target .scss files
          use: [
            'style-loader', // Injects styles into the DOM
            'css-loader',   // Translates CSS into CommonJS
            {
              loader: 'postcss-loader', // Process CSS with PostCSS plugins
              options: {
                postcssOptions: {
                  plugins: [
                    require('autoprefixer'),
                    require('postcss-calc')() // Enable calc plugin here
                  ]
                }
              }
            },
            'sass-loader' // Compiles Sass to CSS (Make sure this runs first)
          ]
        },
      ]
    },
  };
  