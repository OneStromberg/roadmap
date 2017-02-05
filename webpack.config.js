var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
    entry:{
        common:['babel-polyfill','react','redux'],
        guide:["./client/guideline/GuideApp"]
    },
    output: {
        path: __dirname + '/public/build/',
        publicPath: 'build/',
        filename: "[name].bundle.js"
    },
    resolve: {
       root: path.resolve(__dirname),
       extensions: ['', '.js'],
       alias: {
           components: 'common/components',
           styles: 'common/styles'
       }
   },
    plugins: [
        new webpack.DefinePlugin({
            process:{
                env:{
                    NODE_ENV:JSON.stringify(process.env.NODE_ENV || 'development'),
                }
            },
            "process.env.BUILD_APP_TARGET": '"CLIENT"',
            "process.env.ANALYTICS_URL":""
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"common", /* filename= */"common.bundle.js"),
        new ExtractTextPlugin("style/[name].css")
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/, /public/],
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$/,
                loader: 'file'
            },
            {
                test: /\.sass$|\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css!sass", "includePaths[]=" + (path.resolve(__dirname))
                )
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css!less", "includePaths[]=" + (path.resolve(__dirname))
                )
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg$/,
                loader: "url-loader?mimetype=image/svg+xml;charset=UTF-8"
            },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    }
};