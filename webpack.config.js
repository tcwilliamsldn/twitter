const postcssPresetEnv = require('postcss-preset-env');
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
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                postcssPresetEnv({
                                    stage: 0
                                })
                            ]
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: __dirname + '/build/assets',
        filename: 'bundle.js'
    }
};
