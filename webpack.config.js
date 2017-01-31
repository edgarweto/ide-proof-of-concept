var path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: [
    // Webpack devserver host and port
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './js/app' // App entry point
  ],
  output: {
    filename: 'js/bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.less'],
    alias: {
      'appRoot': path.join(__dirname, 'js'),
      'vendor': 'appRoot/vendor'
    }
  },
  module: {
    loaders: [{
      test: /\.less$/,
      loader: 'style-loader!css-loader!autoprefixer?browsers=last 2 version!less-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg)$/,
      // inline base64 URLs for <=8k images, use direct URL for the rest
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.jsx?$/,
      include: [
        path.join(__dirname, 'js')
      ],
      // (loaders process from right to left)
      loaders: [
        'react-hot',
        'babel?presets[]=react,presets[]=es2015',
        'reflux-wrap-loader'
      ]
    }]
  }//end module
};