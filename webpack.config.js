const path = require('path')

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/example/dist'),
    },
    devServer: {
        port: 9000,
        hot: true,
        contentBase: path.join(__dirname, '/'),
        watchContentBase: true,
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000,
    },

};
