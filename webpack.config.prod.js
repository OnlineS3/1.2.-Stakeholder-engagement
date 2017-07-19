var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/app'
  ],
  resolve: {
    root: path.resolve('./app/app'),
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
    {
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'app')
    },
    {
      test: /\.scss$/,
      include: path.join(__dirname, 'app'),
      loader: 'style-loader!css-loader!sass-loader'
    }
    ]
  }
};
