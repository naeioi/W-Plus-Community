var webpack = require("webpack");

module.exports = {
  entry: {
    app: './src/startup.js',
  },
  output: {
    path: './dist',
    filename: '[name].js'
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
      },{
        test: /\.svg$/,
        loader: 'svg-inline'
      }, {
        test: /.html$/,
        loader: 'html-loader'
      }
    ]
  },
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor',
  //     filename: 'vendor.js',
  //     minChunk: Infinity
  //   })
  // ]
}
