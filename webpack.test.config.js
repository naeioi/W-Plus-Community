var webpack = require('webpack');

module.exports = {
  entry: {
      app: './test/App.jsx',
      vendor: ['react', 'react-dom']
  },
  output: {
    path: './test',
    filename: '[name].js'
  },
  devServer: {
    inline: true,
    port: 8800,
    host: '0.0.0.0',
    devtool: "eval",
    contentBase: 'test'
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
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader'
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
