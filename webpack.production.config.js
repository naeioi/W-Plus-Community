var webpack = require("webpack");

module.exports = {
  entry: {
    app: './src/App.jsx',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: './dist',
    filename: 'App.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunk: Infinity
    })
  ]
}
