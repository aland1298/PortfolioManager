const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    // The entry object is where webpack looks to start building the bundle
    entry: path.resolve(__dirname + '/src/js/app/StockPortfolio.js'),

    // Allow Webpack to process other types of files and convert them into valid modules that can be consumed by app
    module: {
        rules: [
            {
                test: /\.js$/, 
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Injects our styles into our DOM
                    'style-loader',
                    // Css-loader interprets @import and @url() and resolves them 
                    'css-loader',
                    // Loader for Webpack for compiling SCSS/Sass files to css
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/i,
                // Exports HTML as string. HTML is minimized when the compiler demands
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        // Resolves import()/require for images
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },

    // Tells Webpack where to emit the minified files it creates and how to name these files
    output: {
        filename: 'stock-portfolio.min.js',
        path: path.resolve('build')
    },

    // Plugins can be leveraged to perform a wider range of tasks like bundle optimization, etc
    plugins: [
        // All files inside webpack output.path directory will be removed once, but the directory itself will not be
        new CleanWebpackPlugin(),
        // Creates a new html file with the appropriate path for any dependencies
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname + '/src/html/StockPortfolio.html'),
                path: path.resolve('build'),
                inject: 'head'
            }
        )
    ]
};