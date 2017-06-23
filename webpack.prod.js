const path = require('path');
const { resolve } = path;
const plugins = require('./plugins');
let newEntries = require('./entry');
let entry = {
  main: './app/app.js'
};
entry = Object.assign({}, entry, newEntries);
module.exports = {
    context: resolve(__dirname, 'src'),
    entry,
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            use: [ 'babel-loader' ],
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        },
        {
            test: /\.hbs$/,
            loader: "handlebars-loader"
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    externals: {
      react: 'var React',
      'react-dom': 'var ReactDOM'
    },
    plugins
};
