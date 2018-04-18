const webpack = require('webpack');
const path = require('path');
const { resolve } = path;

module.exports = {
    devServer: {
        hot: true,
        // 开启服务器的模块热替换（HMR）
        contentBase: resolve(__dirname, 'dist'),
        // 输出文件的路径
        historyApiFallback: true,
        publicPath: '/'
        // 和上文 output 的“publicPath”值保持一致
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
        new webpack.HotModuleReplacementPlugin(), //增加：webpack热替换插件
    ],
    devtool: 'inline-source-map'
};
