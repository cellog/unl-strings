const path = require('path');
module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: [
          path.resolve(__dirname, '../'),
          path.resolve(__dirname, '../node_modules/bootstrap-less')
        ]
      },
      {
        test: /\.less?$/,
        loader: 'style-loader!css-loader!less-loader',
        include: [
          path.resolve(__dirname, '../'),
          path.resolve(__dirname, '../node_modules/bootstrap-less')
        ]
      },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
