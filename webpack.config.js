const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

const HOST = '127.0.0.1';
const PORT = '8888';

module.exports = {
    entry: [
        'webpack-dev-server/client?http://'+HOST+':'+PORT,
        './app/main.ts'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js",
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

        // index: './build/index.html',

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
        })
    ]
};