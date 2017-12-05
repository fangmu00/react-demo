const path = require('path');
const { resolve } = path;
const merge = require('webpack-merge');

module.exports = function(env) {
  return merge(
    {
      context: resolve(__dirname, 'src'),
      output: {
          path: path.join(__dirname,'dist'),
          filename: '[name].js',
          publicPath: '/'
      },
      resolve: {
        extensions: ['.js', '.jsx', '.json']
      },
      externals: {
        react: 'var React',
        'react-dom': 'var ReactDOM'
      }
    },
    require(`./webpack.${env}.js`)
  );
}
