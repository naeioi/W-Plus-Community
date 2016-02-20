var webpack = require('webpack');

module.exports = {
  entry: {
      app: './src/App.jsx',
      vendor: ['react', 'react-dom']
  },
  output: {
    path: './dev',
    filename: 'App.js'
  },
  devServer: {
    inline: true,
    port: 8080,
    host: '0.0.0.0',
    devtool: "eval"
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
