'use strict'

const path = require('path')
const utils = require('./utils')
const config = require('../config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: {
        app: [
            /** https://github.com/vuejs-templates/webpack/issues/474  */
            'babel-polyfill',
            './App/bootstrapper.ts'
        ],
        vendor: [
            'vue',
            'vuex',
            'vue-rx',
            'vue-router',
            'vue-i18n',
            'axios',
            'vue-class-component',
            'vue-property-decorator',
        ]
    },
    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                exclude: /node_modules|vue\/src/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [/\.vue$/],

                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
            // {
            //     test: /\.vue$/,
            //     loader: "vue-loader"
            // },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".vue", ".json"],
        alias: {
            'vue$': "vue/dist/vue.esm.js",
            "@": resolve("src"),
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath
    }
};