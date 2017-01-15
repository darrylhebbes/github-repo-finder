import path from 'path';
import webpack from 'webpack';
import webpackConfig from './base';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';

webpackConfig.module.loaders = [
    {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
    },
    ...webpackConfig.module.loaders
];

export default Object.assign({}, webpackConfig, {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        publicPath: '/dist/',
        path: path.resolve(__dirname, '../', 'dist/'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:3000' })
    ]
});
