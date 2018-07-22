const dev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: ['./src/app/index.js'],
    mode: dev ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        path: __dirname + '/build/assets',
        filename: 'bundle.js'
    }
};
