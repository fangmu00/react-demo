const webpack = require('webpack');
const path = require('path');
const plugins = require('./plugins');
const { resolve } = path;
let newEntries = require('./entry');
// let entry = [
//   'react-hot-loader/patch',
//   // 开启 React 代码的模块热替换(HMR)
//   'webpack-dev-server/client?http://localhost:8080',
//   // 为 webpack-dev-server 的环境打包代码
//   // 然后连接到指定服务器域名与端口
//   'webpack/hot/only-dev-server',
//   // 为热替换(HMR)打包好代码
//   // only- 意味着只有成功更新运行代码才会执行热替换(HMR)
//   './app/app.js'
//   // 我们 app 的入口文件
// ];
let entry = {
  main: [
      'react-hot-loader/patch',
      './app/app.js'
    ]
}
entry = Object.assign({}, entry, newEntries);
// if (Object.keys(newEntries).length) {
//   Object.keys(newEntries).forEach((item) => {
//     entry.push(newEntries[item])
//   })
// }
const config ={
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
    devServer: {
        hot: true,
        // 开启服务器的模块热替换（HMR）
        contentBase: resolve(__dirname, 'dist'),
        // 输出文件的路径

        publicPath: '/'
        // 和上文 output 的“publicPath”值保持一致
    },
    externals: {
      react: 'var React',
      'react-dom': 'var ReactDOM'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
        new webpack.HotModuleReplacementPlugin() //增加：webpack热替换插件
    ],
    devtool: 'cheap-module-eval-source-map'
    //devtool: 'source-map'
};

config.plugins.concat(plugins);

module.exports = config;
