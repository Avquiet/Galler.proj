const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: 'file-loader',
            },
            // {
            //             loader: 'img-optimize-loader',
            //             options: {
            //                 compress: {
            //                     mode: 'high',
            //                     webp: true,
            //                     gifsicle: true,
            //                     disableOnDevelopment: false,
            //                 }
            //             }
            //         }
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader,
                    
                     'css-loader',
                     'sass-loader']
            },
            
            {
                test:/\.mp3$/,
                use: ['file-loader']
            },
            {
                test:/\.mp4$/,
                use: ['file-loader']
            }
        ]

    },

    plugins: [
		new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        new MiniCssExtractPlugin({ 
            filename: 'main.[bindle].css' 
        }),
        new BundleAnalyzerPlugin(),
    ]


    
}