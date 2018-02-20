const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = '127.0.0.1';
const PORT = '8080';

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: [
        'webpack-dev-server/client?http://'+HOST+':'+PORT,
        PATHS.app + '/main.ts'
    ],
    output: {
        path: PATHS.build,
        filename: 'bundle.js',
        pathinfo: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader'],
                exclude: /node_modules|athena\.app/
            },
            {
                test: /athena\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    devServer: {
        host: HOST,
        port: PORT,

        contentBase: path.join(__dirname, 'build'),
        index: './index.html',

        // inline hot-reload
        inline: true
    },
    resolve: {
        modules: [
            'node_modules'
        ],
        extensions: [".ts", ".js"]
    },
    plugins: [
        new WebpackNotifierPlugin({
            alwaysNotify: true,
            skipFirstNotification: true,
            title: 'AthenaJS-Breakout'
        }),
        new HtmlWebpackPlugin({
            filename: PATHS.build + '/index.html',
            template: PATHS.app + '/index.html'
        })
    ]
};